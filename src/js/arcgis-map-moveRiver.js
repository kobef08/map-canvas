import tool from '../utils/tool';
import {
    default as resolutionScale
} from '../canvas/resolutionScale';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../animation/requestAnimationFrame';


var MoveRiver = function (map, userOptions) {
    var self = this;
    self.map = map;

    //默认参数
    var options = {
        lineWidth: 0.5, //线条宽度
        lineStyle: '#C82800', //线条颜色
        animateLineWidth: 1, //动画线条宽度
        animateLineStyle: '#ffff00', //动画线条颜色
        // colors: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"]
        colors: [
            "#c1232b",
            "#27727b",
            "#fcce10",
            "#e87c25",
            "#b5c334",
            "#fe8463",
            "#9bca63",
            "#fad860",
            "#f3a43b",
            "#60c0dd",
            "#d7504b",
            "#c6e579",
            "#f4e001",
            "#f0805a",
            "#26c0c0"
        ]
    };

    self.init(userOptions, options);

    //全局变量
    var baseCtx = self.baseCtx = self.options.canvas.getContext("2d");
    var animateCtx = self.animateCtx = self.options.animateCanvas.getContext("2d");
    baseCtx.lineWidth = options.lineWidth;
}

MoveRiver.prototype.init = function (setting, defaults) {
    //合并参数
    tool.merge(setting, defaults);
    this.options = defaults;
}

MoveRiver.prototype.render = function () {
    var self = this;
    var baseCtx = self.baseCtx;
    if (!baseCtx) {
        return;
    }
    var roadLines = self.roadLines;
    roadLines.forEach(function (line) {
        line.drawPath(baseCtx, self.map, self.options);
    });
}

MoveRiver.prototype.animate = function () {
    var self = this;
    var animateCtx = self.animateCtx;
    if (!animateCtx) {
        return;
    }
    // animateCtx.clearRect(0, 0, self.map.width, self.map.height);
    animateCtx.fillStyle = "rgba(0,0,0,0.9)";
    var prev = animateCtx.globalCompositeOperation;
    animateCtx.globalCompositeOperation = "destination-in";
    animateCtx.fillRect(0, 0, self.map.width, self.map.height);
    animateCtx.globalCompositeOperation = prev;

    var roadLines = self.roadLines;
    roadLines.forEach(function (line) {
        line.draw(animateCtx, self.map, self.options);
        // line.drawCircle(animateCtx, self.map, self.options);
    });
}

MoveRiver.prototype.adjustSize = function () {
    var width = this.map.width;
    var height = this.map.height;
    this.baseCtx.canvas.width = width;
    this.baseCtx.canvas.height = height;
    this.animateCtx.canvas.width = width;
    this.animateCtx.canvas.height = height;
    resolutionScale(this.baseCtx);
    resolutionScale(this.animateCtx);
}

MoveRiver.prototype.start = function () {
    var self = this;
    self.stop();
    self.adjustSize();
    self.addLine();
    self.render();
    // (function drawFrame() {
    //     self.timer = setTimeout(function () {
    //         self.animationId = requestAnimationFrame(drawFrame);
    //         self.animate();
    //     }, 1000 / 10);
    // })();

    // (function drawFrame() {
    //     requestAnimationFrame(drawFrame);
    //     self.animate();
    // })();
}

MoveRiver.prototype.stop = function () {
    var self = this;
    cancelAnimationFrame(self.animationId);
    if (self.timer) {
        clearTimeout(self.timer);
    }
}

MoveRiver.prototype.addLine = function () {
    var options = this.options;
    var roadLines = this.roadLines = [],
        dataset = this.options.data;
    dataset.forEach(function (line, i) {
        roadLines.push(new Line({
            points: line,
            color: options.colors[Math.floor(Math.random() * options.colors.length)]
        }));
    });
}

function Line(options) {
    this.points = options.points || [];
    this.age = options.age || 0;
    this.maxAge = options.maxAge || 0;
    this.color = options.color || '#ffff00';
}

Line.prototype.getPointList = function (map) {
    var path = this.path = [],
        points = this.points;
    if (points && points.length > 0) {
        points.forEach(function (p) {
            path.push({
                pixel: map.toScreen(p)
            });
        })
        this.maxAge = path.length;
    }
    return path;
}

Line.prototype.drawPath = function (context, map, options) {
    var pointList = this.path || this.getPointList(map);
    context.beginPath();
    context.lineWidth = options.lineWidth;
    context.strokeStyle = this.color;
    // context.strokeStyle = options.lineStyle;
    context.moveTo(pointList[0].pixel.x, pointList[0].pixel.y);
    for (var i = 0, len = pointList.length; i < len; i++) {
        context.lineTo(pointList[i].pixel.x, pointList[i].pixel.y);
    }
    context.stroke();
}

Line.prototype.draw = function (context, map, options) {
    var pointList = this.path || this.getPointList(map);
    var movePoints = this.movePoints;
    if (movePoints && movePoints.length > 0) {
        var moveLen = movePoints.length;
        for (var i = 0; i < moveLen; i++) {
            if (movePoints[i] >= this.maxAge - 1) {
                movePoints[i] = Math.floor(Math.random() * (pointList.length-1));
            }
            var currentPoint = pointList[movePoints[i]];
            context.beginPath();
            context.lineWidth = options.animateLineWidth;
            context.strokeStyle = this.color;
            context.lineCap="round";
            context.moveTo(currentPoint.pixel.x, currentPoint.pixel.y);
            context.lineTo(pointList[movePoints[i] + 1].pixel.x, pointList[movePoints[i] + 1].pixel.y);
            context.stroke();
            this.movePoints[i]++;
        }
    } else {
        this.random(map);
    }
}

Line.prototype.drawCircle = function (context, map, options) {
    var pointList = this.path || this.getPointList(map);
    if (this.movePoints && this.movePoints.length > 0) {
        var moveLen = this.movePoints.length;
        for (var i = 0; i < moveLen; i++) {
            if (this.movePoints[i] >= this.maxAge - 1) {
                this.movePoints[i] = Math.floor(Math.random() * pointList.length);
            }
            var currentPoint = pointList[this.movePoints[i]];
            context.beginPath();
            context.arc(currentPoint.pixel.x, currentPoint.pixel.y, 1, 0, Math.PI * 2);
            context.fillStyle = this.color;
            context.fill();
            this.movePoints[i]++;
        }
    } else {
        this.random(map);
    }
}

Line.prototype.random = function (map) {
    var pointList = this.path || this.getPointList(map);
    var arr = [];
    var maxNum = Math.floor(pointList.length / 9);
    while (arr.length < maxNum) { //原数组长度为0，每次成功添加一个元素后长度加1，则当数组添加最后一个数字之前长度为9即可
        var num = Math.floor(Math.random() * pointList.length); //生成一个0-100的随机整数
        if (arr.length === 0) { //如果数组长度为0则直接添加到arr数组
            arr.push(num);
        } else {
            for (var i = 0; i < arr.length; i++) { //当新生成的数字与数组中的元素不重合时则添加到arr数组
                if (arr.join(',').indexOf(num) < 0) {
                    arr.push(num);
                }
            }
        }
    }
    this.movePoints = arr;
}

export default MoveRiver;