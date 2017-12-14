(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.PointLine = factory());
}(this, (function () { 'use strict';

/**
 * @author https://github.com/chengquan223
 * @Date 2017-02-27
 * */
function CanvasLayer(options) {
    this.options = options || {};
    this.paneName = this.options.paneName || 'labelPane';
    this.zIndex = this.options.zIndex || 0;
    this._map = options.map;
    this._lastDrawTime = null;
    this.show();
}

CanvasLayer.prototype = new BMap.Overlay();

CanvasLayer.prototype.initialize = function (map) {
    this._map = map;
    var canvas = this.canvas = document.createElement('canvas');
    var ctx = this.ctx = this.canvas.getContext('2d');
    canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';';
    this.adjustSize();
    this.adjustRatio(ctx);
    map.getPanes()[this.paneName].appendChild(canvas);
    var that = this;
    map.addEventListener('resize', function () {
        that.adjustSize();
        that._draw();
    });
    return this.canvas;
};

CanvasLayer.prototype.adjustSize = function () {
    var size = this._map.getSize();
    var canvas = this.canvas;
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
};

CanvasLayer.prototype.adjustRatio = function (ctx) {
    var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
    var canvasWidth = ctx.canvas.width;
    var canvasHeight = ctx.canvas.height;
    ctx.canvas.width = canvasWidth * pixelRatio;
    ctx.canvas.height = canvasHeight * pixelRatio;
    ctx.canvas.style.width = canvasWidth + 'px';
    ctx.canvas.style.height = canvasHeight + 'px';
    // console.log(ctx.canvas.height, canvasHeight);
    ctx.scale(pixelRatio, pixelRatio);
};

CanvasLayer.prototype.draw = function () {
    var self = this;
    var args = arguments;

    clearTimeout(self.timeoutID);
    self.timeoutID = setTimeout(function () {
        self._draw();
    }, 15);
};

CanvasLayer.prototype._draw = function () {
    var map = this._map;
    var size = map.getSize();
    var center = map.getCenter();
    if (center) {
        var pixel = map.pointToOverlayPixel(center);
        this.canvas.style.left = pixel.x - size.width / 2 + 'px';
        this.canvas.style.top = pixel.y - size.height / 2 + 'px';
        this.dispatchEvent('draw');
        this.options.update && this.options.update.call(this);
    }
};

CanvasLayer.prototype.getContainer = function () {
    return this.canvas;
};

CanvasLayer.prototype.show = function () {
    if (!this.canvas) {
        this._map.addOverlay(this);
    }
    this.canvas.style.display = 'block';
};

CanvasLayer.prototype.hide = function () {
    this.canvas.style.display = 'none';
    //this._map.removeOverlay(this);
};

CanvasLayer.prototype.setZIndex = function (zIndex) {
    this.canvas.style.zIndex = zIndex;
};

CanvasLayer.prototype.getZIndex = function () {
    return this.zIndex;
};

var GeoUtils = {
    /**
     * 判断点是否在矩形内
     * @param {Point} point 点对象
     * @param {Bounds} bounds 矩形边界对象
     * @returns {Boolean} 点在矩形内返回true,否则返回false
     */
    isPointInRect: function isPointInRect(point, bounds) {
        //检查类型是否正确
        if (!(point instanceof BMap.Point) || !(bounds instanceof BMap.Bounds)) {
            return false;
        }
        var sw = bounds.getSouthWest(); //西南脚点
        var ne = bounds.getNorthEast(); //东北脚点
        return point.lng >= sw.lng && point.lng <= ne.lng && point.lat >= sw.lat && point.lat <= ne.lat;
    },
    /**
     * 判断点是否在折线上
     * @param {Point} point 点对象
     * @param {Polyline} polyline 折线对象
     * @returns {Boolean} 点在折线上返回true,否则返回false
     */
    isPointOnPolyline: function isPointOnPolyline(point, polyline) {
        //检查类型
        if (!(point instanceof BMap.Point) || !(polyline instanceof BMap.Polyline)) {
            return false;
        }

        //首先判断点是否在线的外包矩形内，如果在，则进一步判断，否则返回false
        var lineBounds = polyline.getBounds();
        if (!this.isPointInRect(point, lineBounds)) {
            return false;
        }

        //判断点是否在线段上，设点为Q，线段为P1P2 ，
        //判断点Q在该线段上的依据是：( Q - P1 ) × ( P2 - P1 ) = 0，且 Q 在以 P1，P2为对角顶点的矩形内
        var pts = polyline.getPath();
        for (var i = 0; i < pts.length - 1; i++) {
            var curPt = pts[i];
            var nextPt = pts[i + 1];
            //首先判断point是否在curPt和nextPt之间，即：此判断该点是否在该线段的外包矩形内
            if (point.lng >= Math.min(curPt.lng, nextPt.lng) && point.lng <= Math.max(curPt.lng, nextPt.lng) && point.lat >= Math.min(curPt.lat, nextPt.lat) && point.lat <= Math.max(curPt.lat, nextPt.lat)) {
                //判断点是否在直线上公式
                var precision = (curPt.lng - point.lng) * (nextPt.lat - point.lat) - (nextPt.lng - point.lng) * (curPt.lat - point.lat);
                if (precision < 2e-10 && precision > -2e-10) {
                    //实质判断是否接近0
                    return true;
                }
            }
        }
        return false;
    }
};

var tool = {
    merge: function merge(settings, defaults) {
        Object.keys(settings).forEach(function (key) {
            defaults[key] = settings[key];
        });
    },
    //计算两点间距离
    getDistance: function getDistance(p1, p2) {
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    }
};

var PointLine = function PointLine(map, userOptions) {
    var self = this;

    self.map = map;
    self.lines = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 1,
        //线条颜色
        lineStyle: '#F9815C'
    };

    //全局变量
    var baseLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    function Line(opts) {
        this.name = opts.name;
        this.path = opts.path;
    }

    Line.prototype.getPointList = function () {
        var points = [],
            path = this.path;
        if (path && path.length > 0) {
            path.forEach(function (p) {
                points.push({
                    name: p.name,
                    pixel: map.pointToPixel(p.location)
                });
            });
        }
        return points;
    };

    Line.prototype.draw = function (context) {
        var pointList = this.getPointList();
        context.save();
        context.beginPath();
        context.lineWidth = options.lineWidth;
        context.strokeStyle = options.lineStyle;
        context.moveTo(pointList[0].pixel.x, pointList[0].pixel.y);
        for (var i = 0, len = pointList.length; i < len; i++) {
            context.lineTo(pointList[i].pixel.x, pointList[i].pixel.y);
        }
        context.stroke();
        context.closePath();
        context.restore();
    };

    //底层canvas渲染，标注，线条
    var brush = function brush() {
        var baseCtx = baseLayer.canvas.getContext('2d');
        if (!baseCtx) {
            return;
        }

        addLine();

        baseCtx.clearRect(0, 0, width, height);

        self.lines.forEach(function (line) {
            line.draw(baseCtx);
        });
    };

    var addLine = function addLine() {
        if (self.lines && self.lines.length > 0) return;
        var dataset = options.data;
        dataset.forEach(function (l, i) {
            var line = new Line({
                name: l.name,
                path: []
            });
            l.data.forEach(function (p, j) {
                line.path.push({
                    name: p.name,
                    location: new BMap.Point(p.Longitude, p.Latitude)
                });
            });
            self.lines.push(line);
        });
    };

    self.init(userOptions, options);

    baseLayer = new CanvasLayer({
        map: map,
        update: brush
    });

    this.clickEvent = this.clickEvent.bind(this);

    this.bindEvent();
};

PointLine.prototype.init = function (settings, defaults) {
    //合并参数
    tool.merge(settings, defaults);

    this.options = defaults;
};

PointLine.prototype.bindEvent = function (e) {
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.click) {
            map.setDefaultCursor("default");
            map.addEventListener('click', this.clickEvent);
        }
    }
};

PointLine.prototype.clickEvent = function (e) {
    var self = this,
        lines = self.lines;
    if (lines.length > 0) {
        lines.forEach(function (line, i) {
            var pts = [];
            line.path.forEach(function (point, j) {
                pts.push(point.location);
            });
            var polyline = new BMap.Polyline(pts);
            var isOnLine = GeoUtils.isPointOnPolyline(e.point, polyline);
            if (isOnLine) {
                self.options.methods.click(e, line.name);
                return;
            }
        });
    }
};

return PointLine;

})));
