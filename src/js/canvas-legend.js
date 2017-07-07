import Canvas from '../canvas/Canvas';
import ColorUtil from '../utils/ColorUtil';

var Legend = function (id, options) {
    var width = window.innerWidth,
        height = window.innerHeight,
        canvas = new Canvas(width, height),
        context = canvas.getContext('2d');

    document.getElementById(id).appendChild(canvas);

    function Rect(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 10;
        this.color = color;

        this.clickEvent = this.clickEvent.bind(this);
        this.bindEvent();
    }

    Rect.prototype.clickEvent = function (e) {
        if (e.x >= this.x && e.x <= this.x + this.width && e.y >= this.y && e.y <= this.y + this.height) {
            alert('你点中了');
        }
    }

    Rect.prototype.bindEvent = function (e) {
        canvas.addEventListener('click', this.clickEvent);
    }

    var colorUtil = new ColorUtil();

    var colorArr = colorUtil.getGradientColor(options.startColor, options.endColor, options.step);

    for (var i = 0, len = colorArr.length; i < len; i++) {
        var color = colorArr[i];
        var gap = 15;
        var rect = new Rect(width / 2, height / 2 + 15 * i, color);
        drawRect(rect);
    }

    function drawRect(rect) {
        context.save();
        context.beginPath();
        context.fillStyle = rect.color;
        context.fillRect(rect.x, rect.y, 20, 10);
        context.closePath();
        context.restore();
    }
}

export default Legend;