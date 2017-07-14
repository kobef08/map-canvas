import CanvasLayer from '../map/baidu-map/CanvasLayer';

import {requestAnimationFrame,cancelAnimationFrame} from '../animation/requestAnimationFrame';

function Marker(opts) {
    this.city = opts.name;
    this.location = new BMap.Point(opts.lnglat[0], opts.lnglat[1]);
    this.color = opts.color;
    this.type = opts.type || 'circle';
    this.speed = opts.speed || 0.15;
    this.size = 0;
    this.max = opts.max || 20;
}

Marker.prototype.draw = function (context) {
    context.save();
    context.beginPath();
    switch (this.type) {
        case 'circle':
            this._drawCircle(context);
            break;
        case 'ellipse':
            this._drawEllipse(context);
            break;
        default:
            break;
    }
    context.closePath();
    context.restore();

    this.size += this.speed;
    if (this.size > this.max) {
        this.size = 0;
    }
}

Marker.prototype._drawCircle = function (context) {
    var pixel = this.pixel || map.pointToPixel(this.location);
    context.strokeStyle = this.color;
    context.moveTo(pixel.x + pixel.size, pixel.y);
    context.arc(pixel.x, pixel.y, this.size, 0, Math.PI * 2);
    context.stroke();

}

Marker.prototype._drawEllipse = function (context) {
    var pixel = this.pixel || map.pointToPixel(this.location);
    var x = pixel.x,
        y = pixel.y,
        w = this.size,
        h = this.size / 2,
        kappa = 0.5522848,
        // control point offset horizontal
        ox = w / 2 * kappa,
        // control point offset vertical
        oy = h / 2 * kappa,
        // x-start
        xs = x - w / 2,
        // y-start
        ys = y - h / 2,
        // x-end
        xe = x + w / 2,
        // y-end
        ye = y + h / 2;

    context.strokeStyle = this.color;
    context.moveTo(xs, y);
    context.bezierCurveTo(xs, y - oy, x - ox, ys, x, ys);
    context.bezierCurveTo(x + ox, ys, xe, y - oy, xe, y);
    context.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
    context.bezierCurveTo(x - ox, ye, xs, y + oy, xs, y);
    context.stroke();
}

function FlashMarker(map, dataSet) {
    var animationLayer = null,
        width = map.getSize().width,
        height = map.getSize().height,
        animationFlag = true,
        markers = [];

    var addMarker = function () {
        if (markers.length > 0) return;
        markers = [];
        for (var i = 0; i < dataSet.length; i++) {
            markers.push(new Marker(dataSet[i]));
        }
    };

    //上层canvas渲染，动画效果
    var render = function () {
        var animationCtx = animationLayer.canvas.getContext('2d');
        if (!animationCtx) {
            return;
        }

        if (!animationFlag) {
            animationCtx.clearRect(0, 0, width, height);
            return;
        }

        addMarker();

        animationCtx.fillStyle = 'rgba(0,0,0,.95)';
        var prev = animationCtx.globalCompositeOperation;
        animationCtx.globalCompositeOperation = 'destination-in';
        animationCtx.fillRect(0, 0, width, height);
        animationCtx.globalCompositeOperation = prev;

        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            marker.draw(animationCtx);
        }
    }

    //鼠标事件
    var mouseInteract = function () {
        map.addEventListener('movestart', function () {
            animationFlag = false;
        });

        map.addEventListener('moveend', function () {
            animationFlag = true;
            markers = []; //解决拖动后多余的小圆点bug，没想明白，暂时这样
        });

        map.addEventListener('zoomstart', function () {
            animationFlag = false;
        });

        map.addEventListener('zoomend', function () {
            animationFlag = true;
            markers = [];
        });
    };

    //初始化
    var init = function () {
        animationLayer = new CanvasLayer({
            map: map,
            update: render
        });

        mouseInteract();

        (function drawFrame() {
            requestAnimationFrame(drawFrame);
            render();
        }());
    };

    init();
}

export default FlashMarker;