import util from '../core/util';
import CanvasLayer from '../map/baidu-map/CanvasLayer';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../animation/requestAnimationFrame';

var Typhoon = function (map, userOptions) {
    var self = this;

    //默认参数
    var options = {
        //marker点半径
        markerRadius: 4,
        //marker点颜色,为空或null则默认取线条颜色
        markerColor: '#555',
        //线条宽度
        lineWidth: 1,
        //线条类型 solid、dashed、dotted
        lineType: 'solid',
        //线条颜色
        lineStyle: '#0076c9',
        //台风图片
        imgurl: 'images/typhoon.png'
    };

    //全局变量
    var baseLayer = null,
        animationLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    //参数合并
    util.merge(options, userOptions, true);

    self.options = options;
    //初始化
    self.init = function () {
        self.setDataSet();

        baseLayer = new CanvasLayer({
            map: map,
            update: self.render
        });
    }
    //底层canvas渲染
    self.render = function () {
        var baseCtx = baseLayer.canvas.getContext('2d');
        if (!baseCtx) {
            return;
        }
        baseCtx.clearRect(0, 0, width, height);
        var dataSet = self.options.data;

    }
    self.draw = function () {

    }
    //数据源转换
    self.setDataSet = function () {
        var img = this.img = new Image();
        img.src = this.imgurl;
        var dataSet = this.dataSet = [];
        var opts = self.options;
        opts.data.forEach(function (value) {
            var typhoonEye = new TyphoonEye(value);
            typhoonEye.setLevelInfo(value.tlevel, opts.splitData);
            dataSet.push(typhoonEye);
        });
    }

    function TyphoonEye(opts) {
        this.id = opts.id; //台风编号
        this.lon = opts.lon;
        this.lat = opts.lat;
        this.pubTime = opts.pubTime; //发布时间
        this.airPress = opts.airPress; //气压
        this.speed = opts.speed; //最大风速
        this.radius6 = opts.radius6; //六级半径
        this.radius7 = opts.radius7; //七级半径
        this.radius8 = opts.radius8; //八级半径
        this.radius10 = opts.radius10; //十级半径
        this.radius12 = opts.radius12; //十二级半径
    }

    TyphoonEye.prototype.setLevelInfo = function (name, splitData) {
        for (var i = 0; i < splitData.length; i++) {
            var split = splitData[i];
            if (split.name === name) {
                this.level = split.level;
                this.power = split.power;
                this.color = split.color;
                return;
            }
        }
    }
    //各级风力半径
    TyphoonEye.prototype.getRadiusList = function (zoom) {
        var radiusList = [];
        var pixel = Math.pow(2, 18 - zoom); //该级别1px代表的距离
        if (this.radius6 != '') {
            radiusList.push(Number(this.radius6) * 1000 / pixel);
        }
        if (this.radius7 != '') {
            radiusList.push(Number(this.radius7) * 1000 / pixel);
        }
        if (this.radius8 != '') {
            radiusList.push(Number(this.radius8) * 1000 / pixel);
        }
        if (this.radius10 != '') {
            radiusList.push(Number(this.radius10) * 1000 / pixel);
        }
        if (this.radius12 != '') {
            radiusList.push(Number(this.radius12) * 1000 / pixel);
        }
        return radiusList;
    }
    //台风经过的点
    TyphoonEye.prototype.drawSymbol = function (ctx, x, y) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = options.markerColor;
        ctx.lineWidth = .3;
        ctx.arc(x, y, options.markerRadius, 0, Math.PI * 2);
        ctx.fil();
        ctx.stroke();
        ctx.closePath();
    }
    //台风轨迹线
    TyphoonEye.prototype.drawTrackLine = function (ctx, x1, y1, x2, y2) {
        context.lineWidth = options.lineWidth;
        context.strokeStyle = options.lineStyle;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }
    //台风影响区域圆
    TyphoonEye.prototype.drawCircle = function (ctx, x, y, r, i) {
        context.beginPath();
        context.fillStyle = 'rgba(255,172,5,' + 0.3 + 0.15 * i + ')';
        context.strokeStyle = 'rgba(255,172,5,.8)';
        context.lineWidth = 1;
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.closePath();
    }
    //台风图标
    Typhoon.prototype.drawImage = function (ctx, img, x, y) {
        img.addEventListener("load", function () {
            ctx.drawImage(img, x - 15, y - 15, 30, 30);
        });
        if (img.complete) {
            ctx.drawImage(img, x - 15, y - 15, 30, 30);
        }
    };

    self.init();
};

Typhoon.prototype.update = function () {

}

export default Typhoon;