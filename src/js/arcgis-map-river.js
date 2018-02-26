import tool from '../utils/tool';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../animation/requestAnimationFrame';


var MoveLine = function (map, userOptions) {
    var self = this;
    self.map = map;

    //默认参数
    var options = {
        lineWidth: 0.5, //线条宽度
        lineStyle: 'rgb(200, 40, 0)', //线条颜色
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

MoveLine.prototype.init = function (setting, defaults) {
    //合并参数
    tool.merge(setting, defaults);
    this.options = defaults;
}

MoveLine.prototype.render = function () {
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

MoveLine.prototype.animate = function () {
    var self = this;
    var animateCtx = self.animateCtx;
    if (!animateCtx) {
        return;
    }
    animateCtx.clearRect(0, 0, self.map.width, self.map.height);
    // animateCtx.fillStyle = "rgba(0,0,0,0.97)";
    // var prev = animateCtx.globalCompositeOperation;
    // animateCtx.globalCompositeOperation = "destination-in";
    // animateCtx.fillRect(0, 0, self.map.width, self.map.height);
    // animateCtx.globalCompositeOperation = prev;

    var roadLines = self.roadLines;
    roadLines.forEach(function (line) {
        // line.draw(animateCtx, self.map, self.options);
        line.drawCircle(animateCtx, self.map, self.options);
    });
}

MoveLine.prototype.start = function () {
    var self = this;
    self.stop();
    self.addLine();
    self.render();
    (function drawFrame() {
        self.timer = setTimeout(function () {
            self.animationId = requestAnimationFrame(drawFrame);
            self.animate();
        }, 1000 / 10);
    })();
    // (function drawFrame() {
    //     requestAnimationFrame(drawFrame);
    //     self.animate();
    // })();
}

MoveLine.prototype.stop = function () {
    var self = this;
    cancelAnimationFrame(self.animationId);
    if (self.timer) {
        clearTimeout(self.timer);
    }
}

MoveLine.prototype.addLine = function () {
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
    context.strokeStyle = options.lineStyle;
    context.moveTo(pointList[0].pixel.x, pointList[0].pixel.y);
    for (var i = 0, len = pointList.length; i < len; i++) {
        context.lineTo(pointList[i].pixel.x, pointList[i].pixel.y);
    }
    context.stroke();
}

Line.prototype.draw = function (context, map, options) {
    var pointList = this.path || this.getPointList(map);
    context.beginPath();
    context.lineWidth = options.animateLineWidth;
    context.strokeStyle = this.color;
    if (this.age >= this.maxAge - 1) {
        this.age = 0;
    }
    context.moveTo(pointList[this.age].pixel.x, pointList[this.age].pixel.y);
    context.lineTo(pointList[this.age + 1].pixel.x, pointList[this.age + 1].pixel.y);
    context.stroke();

    this.age++;
}

Line.prototype.drawCircle = function (context, map, options) {
    var pointList = this.path || this.getPointList(map);
    if (this.movePoints && this.movePoints.length > 0) {
        var moveLen = this.movePoints.length;
        for (var i = 0; i < moveLen; i++) {
            if(this.movePoints[i]>=this.maxAge-1){
                this.movePoints[i]=Math.floor(Math.random()*pointList.length);
            }
            var currentPoint = pointList[this.movePoints[i]];
            context.beginPath();
            context.arc(currentPoint.pixel.x, currentPoint.pixel.y, 2, 0, Math.PI * 2);
            context.fillStyle = this.color;
            context.fill();
            this.movePoints[i]++;
        }
    }else{
        this.random(map);
    }
}

Line.prototype.random = function (map) {
    var pointList = this.path || this.getPointList(map);
    var arr = [];
    var maxNum = Math.floor(pointList.length / 8);
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
    this.movePoints =arr;
}

export default MoveLine;