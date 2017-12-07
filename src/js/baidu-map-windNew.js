import CanvasLayer from '../map/baidu-map/CanvasLayer';
import tool from '../utils/tool';
import {requestAnimationFrame,cancelAnimationFrame} from '../animation/requestAnimationFrame';

var Windy = function (map, userOptions) {
    var self = this;

    this.map = map;

    //默认参数
    var options = {
        MAX_PARTICLE_AGE: 100,
        FRAME_RATE: 20,
        PARTICLE_MULTIPLIER: 8,
        size: .8,
        color: 'rgba(71,160,233,0.8)'
    };

    //全局变量
    var animationLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    self.map = map;
    //初始化
    self._init(userOptions, options);

    var canvasLayer = self.canvasLayer = new CanvasLayer({
        map: map,
        context: this.context,
        update: function () {
            self._render();
        }
    });
    this.clickEvent = this.clickEvent.bind(this);
    this.mousemoveEvent = this.mousemoveEvent.bind(this);

    this.bindEvent();
}

Windy.prototype._init = function (settings, defaults) {
    var self = this;

    //合并参数
    tool.merge(settings, defaults);

    self.options = options;
}

Windy.prototype._render = function () {
    console.log('_render');
}

Windy.prototype.start = function () {

}

Windy.prototype.stop = function () {

}

Windy.prototype.update = function (resetOpts) {
    for (var key in resetOpts) {
        this.options[key] = resetOpts[key];
    }
}

Windy.prototype.clickEvent = function (e) {
    var pixel = e.pixel;
    this.options.methods.click(pixel, e);
}

Windy.prototype.mousemoveEvent = function (e) {
    var pixel = e.pixel;
    this.options.methods.mousemove(pixel, e);
}

Windy.prototype.bindEvent = function (e) {
    var self = this;
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.click) {
            map.setDefaultCursor("default");
            map.addEventListener('click', this.clickEvent);
        }
        if (this.options.methods.mousemove) {
            map.addEventListener('mousemove', this.mousemoveEvent);
        }
    }
}

Windy.prototype.unbindEvent = function (e) {
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.click) {
            map.removeEventListener('click', this.clickEvent);
        }
        if (this.options.methods.mousemove) {
            map.removeEventListener('mousemove', this.mousemoveEvent);
        }
    }
}

export default Windy;