var baseLayer = new CanvasLayer({
    map: map,
    update: brush
});
var animationLayer = new CanvasLayer({
    map: map,
    update: update
});
var markers = [],
    markLines = [];

function brush() {
    var context = baseLayer.canvas.getContext('2d');
    if (!context) {
        return;
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    addMarker();

    addLine();

    markers.forEach(function (marker) {
        marker.draw(context);
        marker.drawText(context);
    });

    markLines.forEach(function (markLine) {
        markLine.drawLinePath(context);
    });
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

function Marker(options) {
    this.options = options;
    this.size = options.size || 3;
    this.location = options.location;
}

Marker.prototype.draw = function (context) {
    var options = this.options;
    var pixel = this.pixel = map.pointToPixel(this.location);

    context.save();
    context.beginPath();
    if (options.style) {
        for (var key in options.style) {
            context[key] = options.style[key];
        }
    }
    context.arc(pixel.x, pixel.y, this.size, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.restore();
}

Marker.prototype.drawText = function (context) {
    var pixel = this.pixel || map.pointToPixel(this.location);
    context.save();
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '12px Microsoft YaHei';
    context.fillStyle = this.options.style.fillStyle;
    context.fillText(this.options.city, pixel.x, pixel.y - 10);
    context.restore();
}

function MarkLine(options) {
    this.options = options;
    this.from = options.from;
    this.to = options.to;
    this.index = 0;
}

MarkLine.prototype.drawLinePath = function (context) {
    var options = this.options;
    var pointList = this.path = this.getPointList(map.pointToPixel(this.from.location), map.pointToPixel(this.to.location));
    var len = pointList.length;
    context.save();
    context.beginPath();
    context.lineWidth = options.style.lineWidth;
    context.strokeStyle = options.style.color;

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
    var pointList = this.path || this.getPointList(map.pointToPixel(this.from.location), map.pointToPixel(this.to.location));

    context.save();
    if (this.options.style) {
        for (var key in this.options.style) {
            context[key] = this.options.style[key];
        }
    }
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

function addMarker() {
    markers = [];
    var index = 0,
        colors = ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'];
    for (var name in citys) {
        var lnglat = citys[name];
        markers.push(new Marker({
            city: name,
            location: new BMap.Point(lnglat[0], lnglat[1]),
            size: 4,
            style: {
                fillStyle: colors[index]
            }
        }));
        index++;
    }
}

function addLine() {
    markLines = [];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var options = {
            style: {
                lineWidth: 1,
                fillStyle: '#fff',
                shadowColor: '#fff',
                shadowBlur: 5,
            },
            lineType: 'solid'
        };
        markers.forEach(function (marker) {
            if (line.from === marker.options.city) {
                options.from = marker;
            } else if (line.to === marker.options.city) {
                options.to = marker;
                options.style.color = marker.options.style.fillStyle;
            }
        });
        markLines.push(new MarkLine(options));
    }
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

animate();