import map from './src/map';
import Typhoon from './src/Typhoon';
import {requestAnimationFrame,cancelAnimationFrame} from './src/requestAnimationFrame';
import baseInfo from './src/baseInfo';

/************定义canvas图层************/
function TyphoonOverLayer() {}

TyphoonOverLayer.prototype = new BMap.Overlay();

TyphoonOverLayer.prototype.initialize = function () {
    var canvas = document.createElement('canvas');
    canvas.id = "typhoonCanvas";
    canvas.width = paint.width = map.getSize().width;
    canvas.height = paint.height = map.getSize().height;
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    ctx = canvas.getContext('2d');
    map.getPanes().labelPane.appendChild(canvas);
}

TyphoonOverLayer.prototype.draw = function () {
    var bounds = map.getBounds(); //返回当前视口的西南纬度/经度和东北纬度/经度
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var py = map.pointToOverlayPixel(new BMap.Point(sw.lng, ne.lat)); //经纬度转成屏幕坐标
    ctx.canvas.style.left = py.x + 'px';
    ctx.canvas.style.top = py.y + 'px';
    ctx.clearRect(0, 0, paint.width, paint.height);
    paint.zoom = map.getZoom();
    paint.dataSet.each(function (i, data) {
        var px = map.pointToOverlayPixel(new BMap.Point(data.lon, data.lat));
        data.x = px.x - py.x;
        data.y = px.y - py.y;
    })
    paint.render();
}

Array.prototype.each = function (callback) {
    for (var i = 0, n = this.length; i < n; i++) {
        callback(i, this[i]);
    }
}

var ctx;
var paint = {
    isAnimation: true, //是否开启动画
    deg: 0,
    render: function () {
        this.isAnimation ? this.draw() : this.drawPath();
    },
    drawPath: function (oldDataSet) {
        var self = this;
        var dataSet = oldDataSet || self.dataSet;
        //绘制点、线、图片
        dataSet.each(function (i, data) {
            ctx.save();
            if (i < dataSet.length - 1) {
                var nextData = dataSet[i + 1];
                data.drawLine(ctx, data.x, data.y, nextData.x, nextData.y);
                data.drawSymbol(ctx, data.x, data.y);
            } else {
                data.drawSymbol(ctx, data.x, data.y);
            }
            ctx.restore();
        });

        //绘制各风级范围
        var typhoon = dataSet[self.currentIndex];
        var radiusList = typhoon.getRadiusList(self.zoom);
        ctx.save();

        if (!self.windmillAnimationId) { //当风车还未转动时，也就是有轨迹动画时候，画出风车，转动时，已有画风车部分
            typhoon.drawImage(ctx, self.img, typhoon.x, typhoon.y);
        }
        ctx.globalCompositeOperation = "destination-over";
        radiusList.each(function (i, radius) {
            typhoon.drawCircle(ctx, typhoon.x, typhoon.y, radius, i);
        });
        ctx.restore();
    },
    draw: function () {
        var self = this;
        self.oldDataSet = [];
        self.currentIndex = self.oldDataSet.length > 0 ? self.oldDataSet.length - 1 : 0;
        self.lastIndex = self.dataSet.length - 1; //当点击不同的点时，改变lastIndex，可设置该点风车动画
        self.animationId = null;
        self.pathAnimate();
    },
    pathAnimate: function () {
        var self = this;
        var dataSet = self.dataSet;
        var typhoon = dataSet[self.currentIndex];
        self.oldDataSet.push(typhoon);
        ctx.clearRect(0, 0, self.width, self.height);
        self.drawPath(self.oldDataSet);
        self.animationId = requestAnimationFrame(function () {
            self.pathAnimate(dataSet);
        });
        if (self.currentIndex == self.lastIndex) {
            cancelAnimationFrame(self.animationId);
            self.isAnimation = false;
            self.windMillAnimate();
        } else {
            self.currentIndex++;
        }
    },
    windMillAnimate: function () {
        var self = this;
        var typhoon = self.dataSet[self.currentIndex];
        ctx.save();
        ctx.clearRect(0, 0, self.width, self.height);
        self.drawPath();
        ctx.translate(typhoon.x, typhoon.y);
        ctx.rotate(self.deg * Math.PI / 180);
        ctx.drawImage(self.img, -15, -15, 30, 30);
        ctx.restore();
        self.deg += 2;
        self.windmillAnimationId = requestAnimationFrame(function () {
            self.windMillAnimate();
        });
    },
    initDataSet: function () {
        var img = this.img = new Image();
        img.src = 'js/typhoon.png';
        var dataSet = this.dataSet = [];
        typhoonPath.each(function (i, v) {
            var info = baseInfo.get(v.tlev);
            dataSet.push(new Typhoon({
                id: i,
                lon: v.lon,
                lat: v.lat,
                pubTime: v.dt,
                airPress: v.pres,
                speed: v.ws,
                radius6: v.rr06,
                radius7: v.rr07,
                radius8: v.rr08,
                radius10: v.rr10,
                radius12: v.rr12,
                level: info.level,
                power: info.power,
                color: info.color
            }));
        });
    },
    bindEvent: function () {
        var self = this;
        map.addEventListener('mousemove', function (e) {
            var cursor = 'default';
            self.dataSet.each(function (i, data) {
                var result = Math.sqrt(Math.pow(e.clientX - data.x, 2) + Math.pow(e.clientY - data.y, 2)) <= 5;
                if (result) {
                    cursor = 'pointer';
                    return false;
                }
            });
            map.setDefaultCursor(cursor);
        });
        map.addEventListener('mousedown', function (e) {
            paint.dataSet.each(function (i, data) {
                var result = Math.sqrt(Math.pow(e.clientX - data.x, 2) + Math.pow(e.clientY - data.y, 2)) <= 5;
                if (result) {
                    paint.currentIndex = i; //动画设置为当前点
                    return false;
                }
            });
        });
    },
    init: function () {
        this.bindEvent();
        this.initDataSet();
    }
};
paint.init();
map.addOverlay(new TyphoonOverLayer());