(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MoveLine = factory());
}(this, (function () { 'use strict';

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

var global = typeof window === 'undefined' ? {} : window;

var requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
    return global.setTimeout(callback, 1000 / 60);
};

var MoveLine = function MoveLine(map, userOptions) {
    var self = this;
    self.map = map;
    self.lines = [];
    self.pixelList = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 0.5,
        //线条颜色
        lineStyle: '#c82800'
    };

    self.init(userOptions, options);

    //全局变量
    var baseCtx = self.baseCtx = self.options.canvas.getContext("2d");
    baseCtx.lineWidth = options.lineWidth;
};

MoveLine.prototype.init = function (setting, defaults) {
    //合并参数
    tool.merge(setting, defaults);
    this.options = defaults;
};

MoveLine.prototype.render = function () {
    var self = this;
    var baseCtx = self.baseCtx;
    if (!baseCtx) {
        return;
    }

    self._addLine();

    // baseCtx.clearRect(0, 0, self.map.width, self.map.height);
    baseCtx.fillStyle = "rgba(0, 0, 0, 0.97)";
    var prev = baseCtx.globalCompositeOperation;
    baseCtx.globalCompositeOperation = "destination-in";
    baseCtx.fillRect(0, 0, self.map.width, self.map.height);
    baseCtx.globalCompositeOperation = prev;

    self.pixelList = [];
    self.lines.forEach(function (line) {
        self.pixelList.push({
            data: line.getPointList(self.map)
        });
        line.draw(baseCtx, self.map, self.options);
    });
};

MoveLine.prototype.start = function () {
    var self = this;
    self.stop();
    (function frame() {
        try {
            self.timer = setTimeout(function () {
                requestAnimationFrame(frame);
                self.render();
            }, 1000 / 20);
        } catch (e) {
            console.error(e);
        }
    })();
};

MoveLine.prototype.stop = function () {
    if (this.timer) {
        clearTimeout(this.timer);
    }
};

MoveLine.prototype._addLine = function () {
    var self = this;
    if (self.lines && self.lines.length > 0) {
        return;
    }
    var opts = self.options;
    var dataset = opts.data;
    dataset.forEach(function (l, i) {
        var line = new Line({
            path: []
        });
        l.forEach(function (p, j) {
            line.path.push({
                location: p
            });
        });
        self.lines.push(line);
    });
};

function Line(opts) {
    this.path = opts.path;
    this.age = 0;
    this.maxAge = 0;
}

Line.prototype.getPointList = function (map) {
    var points = [],
        path = this.path;
    if (path && path.length > 0) {
        path.forEach(function (p) {
            points.push({
                pixel: map.toScreen(p.location)
            });
        });
        this.maxAge = points.length;
    }
    return points;
};

Line.prototype.draw = function (context, map, options) {
    var pointList = this.pixelList || this.getPointList(map);
    context.beginPath();
    context.shadowColor = 'rgba(200, 40, 0, 0.97)';
    context.shadowBlur = 5;
    context.strokeStyle = options.lineStyle;
    if (this.age >= this.maxAge - 1) {
        this.age = 0;
    }
    context.moveTo(pointList[this.age].pixel.x, pointList[this.age].pixel.y);
    context.lineTo(pointList[this.age + 1].pixel.x, pointList[this.age + 1].pixel.y);
    context.stroke();

    this.age++;
};

Line.prototype.drawCicle = function (context, map, options) {
    var pointList = this.pixelList || this.getPointList(map);
    context.save();
};

return MoveLine;

})));
