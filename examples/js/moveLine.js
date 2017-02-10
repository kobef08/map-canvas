var lineLayer = new CanvasLayer({
    map: map,
    update: brushLine
});
var animationLayer = new CanvasLayer({
    map: map,
    update: update
});
var markLines = [];

function brushLine() {
    var context = lineLayer.canvas.getContext('2d');
    if (!context) {
        return;
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    for (var i = 0; i < markLines.length; i++) {
        var markLine = markLines[i];
        markLine.drawLinePath(context);
    }
}

var ctx = animationLayer.canvas.getContext('2d');
var backDom = document.createElement('canvas');
var backCtx = backDom.getContext('2d');
backDom.width = ctx.canvas.width;
backDom.height = ctx.canvas.height;
backCtx.globalAlpha = 0.85; //关键
backCtx.globalCompositeOperation = 'copy';
var animationFlag = true;

function update() {
    if (!ctx) {
        return;
    }

    backCtx.drawImage(ctx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (!animationFlag) {
        return;
    }

    for (var i = 0; i < markLines.length; i++) {
        var markLine = markLines[i];
        markLine.drawMoveCircle(ctx);
    }

    ctx.drawImage(backDom, 0, 0, backDom.width, backDom.height);
}

function animate() {
    update();
    window.timer = requestAnimationFrame(animate);
    // setTimeout(arguments.callee, 60);
}

map.addEventListener('movestart', function () {
    animationFlag = false;
    cancelAnimationFrame(window.timer);
});

map.addEventListener('moveend', function () {
    animationFlag = true;
    animate();
});

function MarkLine(options) {
    this.options = options;
    this.index = 0;
}

MarkLine.prototype.drawMarker = function (context, point) {
    context.beginPath();
    context.fillStyle = this.options.color;
    context.arc(point.x, point.y, 3, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}

MarkLine.prototype.drawText = function (context, point) {
    context.beginPath();
    context.closePath();
}

MarkLine.prototype.drawLinePath = function (context) {
    var options = this.options;
    var start = map.pointToPixel(options.from);
    var end = map.pointToPixel(options.to);
    var pointList = this.path = this.getPointList(start, end);
    var len = pointList.length;
    context.save();
    context.beginPath();
    context.strokeStyle = options.color;
    context.lineWidth = options.lineWidth || 1;
    this.drawMarker(context, start);
    this.drawMarker(context, end);
    if (!options.lineType || options.lineType == 'solid') {
        context.moveTo(pointList[0][0], pointList[0][1]);
        for (var i = 0; i < len; i++) {
            context.lineTo(pointList[i][0], pointList[i][1]);
        }
    } else if (options.lineType == 'dashed' || options.lineType == 'dotted') {
        for (var i = 1; i < len; i += 2) {
            context.moveTo(pointList[i - 1][0], pointList[i - 1][1]);
            context.lineTo(pointList[i][0], pointList[i][1]);
        }
    }
    context.stroke();
    context.restore();
    this.index = 0; //缩放地图时重新绘制动画
}

MarkLine.prototype.drawMoveCircle = function (context) {
    var pointList = this.path || this.getPointList(map.pointToPixel(this.options.from), map.pointToPixel(this.options.to));
    context.save();
    context.fillStyle = '#fff';
    // context.fillStyle = this.options.color;
    context.shadowBlur = 5;
    context.shadowColor = '#fff';
    context.beginPath();
    context.arc(pointList[this.index][0], pointList[this.index][1], 2, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.restore();
    this.index += 1;
    if (this.index >= pointList.length) {
        this.index = 0;
    }
}

MarkLine.prototype.getPointList = function (from, to) {
    var points = [
        [from.x, from.y],
        [to.x, to.y]
    ];
    var ex = points[1][0];
    var ey = points[1][1];
    points[3] = [ex, ey];
    points[1] = this.getOffsetPoint(points[0], points[3]);
    points[2] = this.getOffsetPoint(points[3], points[0]);
    points = this.smoothSpline(points, false);
    //修正最后一点在插值产生的偏移
    points[points.length - 1] = [ex, ey];
    return points;
}

MarkLine.prototype.getOffsetPoint = function (start, end) {
    var distance = this.getDistance(start, end) / 3; //除以3？
    var angle, dX, dY;
    var mp = [start[0], start[1]];
    var deltaAngle = -0.2; //偏移0.2弧度
    if (start[0] != end[0] && start[1] != end[1]) { //斜率存在
        var k = (end[1] - start[1]) / (end[0] - start[0]);
        angle = Math.atan(k);
    } else if (start[0] == end[0]) { //垂直线
        angle = (start[1] <= end[1] ? 1 : -1) * Math.PI / 2;
    } else { //水平线
        angle = 0;
    }
    if (start[0] <= end[0]) {
        angle -= deltaAngle;
        dX = Math.round(Math.cos(angle) * distance);
        dY = Math.round(Math.sin(angle) * distance);
        mp[0] += dX;
        mp[1] += dY;
    } else {
        angle += deltaAngle;
        dX = Math.round(Math.cos(angle) * distance);
        dY = Math.round(Math.sin(angle) * distance);
        mp[0] -= dX;
        mp[1] -= dY;
    }
    return mp;
}

MarkLine.prototype.smoothSpline = function (points, isLoop) {
    var len = points.length;
    var ret = [];
    var distance = 0;
    for (var i = 1; i < len; i++) {
        distance += this.getDistance(points[i - 1], points[i]);
    }
    var segs = distance / 2;
    segs = segs < len ? len : segs;
    for (var i = 0; i < segs; i++) {
        var pos = i / (segs - 1) * (isLoop ? len : len - 1);
        var idx = Math.floor(pos);
        var w = pos - idx;
        var p0;
        var p1 = points[idx % len];
        var p2;
        var p3;
        if (!isLoop) {
            p0 = points[idx === 0 ? idx : idx - 1];
            p2 = points[idx > len - 2 ? len - 1 : idx + 1];
            p3 = points[idx > len - 3 ? len - 1 : idx + 2];
        } else {
            p0 = points[(idx - 1 + len) % len];
            p2 = points[(idx + 1) % len];
            p3 = points[(idx + 2) % len];
        }
        var w2 = w * w;
        var w3 = w * w2;

        ret.push([
            this.interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3),
            this.interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)
        ]);
    }
    return ret;
}

MarkLine.prototype.interpolate = function (p0, p1, p2, p3, t, t2, t3) {
    var v0 = (p2 - p0) * 0.5;
    var v1 = (p3 - p1) * 0.5;
    return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
};

MarkLine.prototype.getDistance = function (p1, p2) {
    return Math.sqrt(
        (p1[0] - p2[0]) * (p1[0] - p2[0]) +
        (p1[1] - p2[1]) * (p1[1] - p2[1])
    );
}

function addLine() {
    markLines.push(new MarkLine({
        from: new BMap.Point(citys[lines[0].from][0], citys[lines[0].from][1]),
        to: new BMap.Point(citys[lines[0].to][0], citys[lines[0].to][1]),
        s: lines[0].from,
        e: lines[0].to,
        color: '#a6c84c'
    }));
    markLines.push(new MarkLine({
        from: new BMap.Point(citys[lines[1].from][0], citys[lines[1].from][1]),
        to: new BMap.Point(citys[lines[1].to][0], citys[lines[1].to][1]),
        s: lines[1].from,
        e: lines[1].to,
        color: '#ffa022'
    }));
    markLines.push(new MarkLine({
        from: new BMap.Point(citys[lines[2].from][0], citys[lines[2].from][1]),
        to: new BMap.Point(citys[lines[2].to][0], citys[lines[2].to][1]),
        s: lines[2].from,
        e: lines[2].to,
        color: '#46bee9'
    }));
    markLines.push(new MarkLine({
        from: new BMap.Point(citys[lines[3].from][0], citys[lines[3].from][1]),
        to: new BMap.Point(citys[lines[3].to][0], citys[lines[3].to][1]),
        s: lines[3].from,
        e: lines[3].to,
        color: '#CC3201'
    }));
}

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}());

addLine();
animate();