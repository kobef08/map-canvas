(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TrackLine = factory());
}(this, (function () { 'use strict';

var tool = {
    //计算两点间距离
    getDistance: function getDistance(p1, p2) {
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    }
};

var global = typeof window === 'undefined' ? {} : window;

var requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
    return global.setTimeout(callback, 1000 / 60);
};

var TrackLine = function TrackLine(userOptions) {
    //全局参数
    var self = this,
        canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        lines = []; //所有线条

    //默认参数
    var options = {
        lineWidth: 1,
        data: [{
            points: [[50, 50], [150, 250], [400, 650]],
            color: 'blue'
        }]
    };

    //参数合并
    var merge = function merge(userOptions, options) {
        Object.keys(userOptions).forEach(function (key) {
            options[key] = userOptions[key];
        });
    };

    //线条
    function Line(options) {
        this.options = options;
        this.color = options.color;
        this.turnPoints = options.points; //[[50,50],[150,250],[400,650]]
        this.step = 0;
        this.temp = 0;
        this.getPointList();
    }

    Line.prototype.getPointList = function () {
        var self = this;
        var turnPoints = self.turnPoints;
        self.pointList = [];
        if (turnPoints.length < 2) return [];
        for (var i = 0; i < turnPoints.length; i++) {
            var start = turnPoints[i];
            var end = turnPoints[i + 1];
            if (start && end) {
                var distance = Math.floor(tool.getDistance(start, end));
                var vx = (end[0] - start[0]) / distance;
                var vy = (end[1] - start[1]) / distance;
                for (var j = 0; j < distance; j++) {
                    self.pointList.push([start[0] + vx * j, start[1] + vy * j]);
                }
            }
        }
    };

    Line.prototype.draw = function (context) {
        var self = this;
        if (this.turnPoints.length >= 2) {
            context.save();
            context.beginPath();
            context.lineWidth = options.lineWidth;
            context.strokeStyle = options.fillColor;
            context.moveTo(this.turnPoints[0][0], this.turnPoints[0][1]);
            for (var i = 0; i < this.turnPoints.length; i++) {
                context.lineTo(this.turnPoints[i][0], this.turnPoints[i][1]);
            }
            context.stroke();
            context.restore();
        }
    };

    Line.prototype.drawMoveCircle = function (context) {
        var pointList = this.pointList || this.getPointList();

        context.save();
        context.fillStyle = this.color;
        // context.shadowColor = options.shadowColor;
        // context.shadowBlur = options.shadowBlur;
        context.beginPath();
        context.arc(pointList[this.step][0], pointList[this.step][1], 3, 0, Math.PI * 2, true);
        if (this.temp > 0) {
            context.arc(pointList[this.temp][0], pointList[this.temp][1], 3, 0, Math.PI * 2, true);
        }
        context.fill();
        context.closePath();
        context.restore();
        this.step += 1;
        if (this.step > 150 || this.temp > 0) {
            this.temp += 1;
        }
        if (this.step >= pointList.length) {
            this.step = 0;
        }
        if (this.temp >= pointList.length) {
            this.temp = 0;
        }
    };

    //初始化线条
    var createLine = function createLine() {
        var lines = self.lines = [];
        for (var i = 0; i < options.data.length; i++) {
            lines.push(new Line(options.data[i]));
        }
    };

    //渲染
    var render = function render() {
        context.fillStyle = 'rgba(0,0,0,.95)';
        var prev = context.globalCompositeOperation;
        context.globalCompositeOperation = 'destination-in';
        context.fillRect(0, 0, width, height);
        context.globalCompositeOperation = prev;

        var lines = self.lines;
        for (var i = 0; i < lines.length; i++) {
            lines[i].draw(context);
        }

        for (var j = 0; j < lines.length; j++) {
            lines[j].drawMoveCircle(context); //移动圆点
        }
    };

    //初始化
    var init = function init(options) {
        merge(userOptions, options);

        createLine();

        (function drawFrame() {
            requestAnimationFrame(drawFrame);
            render();
        })();
    };

    init(options);
    self.options = options;
};

return TrackLine;

})));
