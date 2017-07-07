import Canvas from '../canvas/Canvas';
import ColorUtil from '../utils/ColorUtil';

var Legend = function (id, options) {
    var width = window.innerWidth,
        height = window.innerHeight,
        canvas = new Canvas(width, height),
        context = canvas.getContext('2d');

    document.getElementById(id).appendChild(canvas);

    function Rect(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.width = width || 20;
        this.height = height || 10;
        this.color = color;
        this.cancle = false;

        this.clickEvent = this.clickEvent.bind(this);
        this.mousemoveEvent = this.mousemoveEvent.bind(this);
        this.bindEvent();
    }

    Rect.prototype.clickEvent = function (e) {
        if (e.x >= this.x && e.x <= this.x + this.width && e.y >= this.y && e.y <= this.y + this.height) {
            this.cancle ? this.reset() : this.update();
        }
    }

    Rect.prototype.mousemoveEvent = function (e) {
        if (e.x >= this.x && e.x <= this.x + this.width && e.y >= this.y && e.y <= this.y + this.height) {
            canvas.style.cursor = 'pointer';
        } else {
            canvas.style.cursor = 'default';
        }
    }

    Rect.prototype.bindEvent = function (e) {
        canvas.addEventListener('click', this.clickEvent);
        canvas.addEventListener('mousemove', this.mousemoveEvent);
    }

    Rect.prototype.update = function (e) {
        context.fillStyle = '#eee';
        context.fillRect(this.x, this.y, this.width, this.height);
        this.cancle = true;
    }

    Rect.prototype.reset = function (e) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        this.cancle = false;
    }

    var colorUtil = new ColorUtil();

    var colorArr = colorUtil.getGradientColor(options.startColor, options.endColor, options.step);

    //分段值域
    for (var i = 0, len = colorArr.length; i < len; i++) {
        var color = colorArr[i];
        var gap = 15;
        var rect = new Rect(width / 4, height / 4 + 15 * i, color);
        drawRect(rect);
    }

    //渐变色条
    var lineRect = new Rect(width / 2, height / 4, '#A6E32D', 20, 150);
    drawRect(lineRect);

    function drawRect(rect) {
        context.save();
        context.beginPath();
        context.fillStyle = rect.color;
        context.fillRect(rect.x, rect.y, rect.width, rect.height);
        context.closePath();
        context.restore();
    }
}

export default Legend;