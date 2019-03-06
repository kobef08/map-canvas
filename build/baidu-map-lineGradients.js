(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.LineGradients = factory());
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

var tool = {
    merge: function merge(settings, defaults) {
        Object.keys(settings).forEach(function (key) {
            defaults[key] = settings[key];
        });
    },
    //计算两点间距离
    getDistance: function getDistance(p1, p2) {
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    },
    //判断点是否在线段上
    containStroke: function containStroke(x0, y0, x1, y1, lineWidth, x, y) {
        if (lineWidth === 0) {
            return false;
        }
        var _l = lineWidth;
        var _a = 0;
        var _b = x0;
        // Quick reject
        if (y > y0 + _l && y > y1 + _l || y < y0 - _l && y < y1 - _l || x > x0 + _l && x > x1 + _l || x < x0 - _l && x < x1 - _l) {
            return false;
        }

        if (x0 !== x1) {
            _a = (y0 - y1) / (x0 - x1);
            _b = (x0 * y1 - x1 * y0) / (x0 - x1);
        } else {
            return Math.abs(x - x0) <= _l / 2;
        }
        var tmp = _a * x - y + _b;
        var _s = tmp * tmp / (_a * _a + 1);
        return _s <= _l / 2 * _l / 2;
    }
};

/**
 * 调色板
 */
function Palette(options) {
    options = options || {};
    this.gradient = options.gradient || {
        0.1: '#fe0000',
        0.4: '#ffaa01',
        0.7: '#b0e000',
        1.0: '#38a702'
    };
    this.width = options.width || 1;
    this.height = options.height || 256;
    this.min = options.min || 0;
    this.max = options.max || 300;
    this.init();
}

Palette.prototype.init = function () {
    var gradient = this.gradient;
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    var context = this.context = canvas.getContext('2d');
    var lineGradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    for (var key in gradient) {
        lineGradient.addColorStop(parseFloat(key), gradient[key]);
    }
    context.fillStyle = lineGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
};

Palette.prototype.getImageData = function () {
    return this.context.getImageData(0, 0, this.width, this.height);
};

Palette.prototype.getColor = function (value) {
    var max = this.max;
    if (value > max) {
        max = value;
    }
    var index = Math.floor((max - value) / max * (this.height - 1)) * 4;
    var imageData = this.context.getImageData(0, 0, 1, this.height).data; //this.width会获取整个调色板data
    return "rgba(" + imageData[index] + ", " + imageData[index + 1] + ", " + imageData[index + 2] + ", 1)";
};

var LineGradients = function LineGradients(map, userOptions) {
    var self = this;

    self.map = map;
    self.lines = [];
    self.pixelList = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 1
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
                    pixel: map.pointToPixel(p.location),
                    value: p.value,
                    time: p.time,
                    color: p.color
                });
            });
        }
        return points;
    };

    Line.prototype.draw = function (context) {
        var pointList = this.pixelList || this.getPointList();

        for (var i = 0, len = pointList.length; i < len - 1; i++) {
            context.save();
            context.beginPath();
            context.lineCap = "round";
            context.lineJoin = "round";
            context.lineWidth = options.lineWidth;
            context.strokeStyle = pointList[i].color;
            context.moveTo(pointList[i].pixel.x, pointList[i].pixel.y);
            context.lineTo(pointList[i + 1].pixel.x, pointList[i + 1].pixel.y);
            context.stroke();
            context.closePath();
            context.restore();
        }
    };

    //底层canvas渲染，标注，线条
    var brush = function brush() {
        var baseCtx = baseLayer.canvas.getContext('2d');
        if (!baseCtx) {
            return;
        }

        addLine();

        baseCtx.clearRect(0, 0, width, height);

        self.pixelList = [];
        self.lines.forEach(function (line) {
            self.pixelList.push({
                name: line.name,
                data: line.getPointList()
            });
            line.draw(baseCtx);
        });
        drawLegend(baseCtx);
    };

    var addLine = function addLine() {
        if (self.lines && self.lines.length > 0) return;
        var dataset = options.data;
        var palette = new Palette({
            gradient: {
                0: 'rgba(175, 46, 90,1)',
                0.167: 'rgba(153,255,51,1)',
                0.333: 'rgba(204,255,51,1)',
                0.5: 'rgba(255,255,71,0.8)',
                0.667: 'rgba(255,250,150,1',
                0.833: 'rgba(255,187,102,0.9)',
                1: 'rgba(255,119,68,0.9)'
            },
            min: 700,
            max: 1200
        });

        dataset.forEach(function (l, i) {
            var line = new Line({
                name: l.name,
                path: []
            });
            l.data.forEach(function (p, j) {
                line.path.push({
                    name: p.name,
                    location: new BMap.Point(p.Longitude, p.Latitude),
                    value: p.value,
                    time: p.time,
                    color: palette.getColor(p.value)
                });
            });
            self.lines.push(line);
        });
    };

    var drawLegend = function drawLegend(context) {
        //调色板
        var palette = new Palette({
            width: 13,
            height: 18,
            min: 600,
            max: 1500,
            gradient: {
                0: 'rgba(100,255,51,1)',
                0.167: 'rgba(153,255,51,1)',
                0.333: 'rgba(204,255,51,1)',
                0.5: 'rgba(255,255,71,0.8)',
                0.667: 'rgba(255,250,150,1',
                0.833: 'rgba(255,187,102,0.9)',
                1: 'rgba(255,119,68,0.9)'
            }
        });
        context.putImageData(palette.getImageData(), 925, 235);
        context.save();
        context.font = '12px Microsoft YaHei';
        context.fillStyle = '#3c3c3c';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(10, 925 + 13 / 2, 235 - 10);
        context.fillText(0, 925 + 13 / 2, 415 + 10);
        context.restore();
    };

    self.init(userOptions, options);

    baseLayer = new CanvasLayer({
        map: map,
        update: brush
    });

    this.clickEvent = this.clickEvent.bind(this);

    this.bindEvent();
};

LineGradients.prototype.init = function (settings, defaults) {
    //合并参数
    tool.merge(settings, defaults);

    this.options = defaults;
};

LineGradients.prototype.bindEvent = function (e) {
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.click) {
            map.setDefaultCursor("default");
            map.addEventListener('click', this.clickEvent);
        }
        if (this.options.methods.mousemove) {
            map.setDefaultCursor("default");
            map.addEventListener('mousemove', this.clickEvent);
        }
    }
};

LineGradients.prototype.clickEvent = function (e) {
    var self = this,
        lines = self.pixelList;
    if (lines.length > 0) {
        lines.forEach(function (line, i) {
            for (var j = 0; j < line.data.length; j++) {
                var beginPt = line.data[j].pixel;
                if (line.data[j + 1] == undefined) {
                    return;
                }
                var endPt = line.data[j + 1].pixel;
                var curPt = e.pixel;
                var isOnLine = tool.containStroke(beginPt.x, beginPt.y, endPt.x, endPt.y, self.options.lineWidth, curPt.x, curPt.y);
                if (isOnLine) {
                    self.options.methods.click(e, line.name);
                    return;
                }
            }
        });
    }
};

return LineGradients;

})));
