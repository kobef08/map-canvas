import tool from '../utils/tool';
import {
    default as resolutionScale
} from '../canvas/resolutionScale';

var Ring = function (map, userOptions) {
    this.map = map;
    this.level = map.getLevel();

    //默认参数
    var options = {
        radius: 100, //半径
        ringColor: 'rgba(66, 240, 238, 0.2)' //光晕颜色
    };

    this.init(userOptions, options);

    //全局变量
    this.baseCtx = this.options.canvas.getContext("2d");
}

Ring.prototype.init = function (setting, defaults) {
    //合并参数
    tool.merge(setting, defaults);
    this.options = defaults;
}

Ring.prototype.render = function () {
    var self = this,
        baseCtx = self.baseCtx;

    if (!baseCtx) {
        return;
    }

    var level = self.map.getLevel();
    var scale = 1;
    if (this.level > level) {
        scale = 1 / ((this.level - level) * 2); //[5,4],[5,3],[5,2]
    } else if (this.level < level) {
        scale = (level - this.level) * 2; //[5,6],[5,7],[5,8]
    } else {
        scale = 1; //[5,5]
    }

    var points = self.options.data;
    points.forEach(point => {
        point.scale = scale;
        self._draw(baseCtx, self.map, point)
    });
}

Ring.prototype._draw = function (context, map, point) {
    var pixel = map.toScreen(point);
    var rgb = point.color.join(',');
    context.beginPath();
    context.arc(pixel.x, pixel.y, point.radius * point.scale, 0, Math.PI * 2, true);
    let gradient = context.createRadialGradient(pixel.x, pixel.y, 0, pixel.x, pixel.y, point.radius * point.scale)
    gradient.addColorStop(0, 'rgba(255,255,255,0)');
    gradient.addColorStop(0.55, 'rgba(255,255,255,0)');
    gradient.addColorStop(0.58, 'rgba(' + rgb + ',0.2)');
    gradient.addColorStop(1, 'rgba(' + rgb + ',0)');
    // gradient.addColorStop(0.58, 'rgba(0,255,255,0.2)');
    // gradient.addColorStop(1, 'rgba(0,255,255,0)');
    context.fillStyle = gradient;
    context.closePath();
    context.fill();
}

Ring.prototype.adjustSize = function () {
    var width = this.map.width;
    var height = this.map.height;
    this.baseCtx.canvas.width = width;
    this.baseCtx.canvas.height = height;
    resolutionScale(this.baseCtx);
}

Ring.prototype.start = function () {
    this.adjustSize();
    this.render();
}

export default Ring;