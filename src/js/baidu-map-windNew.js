import CanvasLayer from '../map/baidu-map/CanvasLayer';
import tool from '../utils/tool';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../utils/requestAnimationFrame';

var Windy = function (map, userOptions) {
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

    //初始化
    this._init(userOptions, options);
}

Windy.prototype._init = function (settings, defaults) {
    var self = this;

    //合并参数
    tool.merge(settings, defaults);

    var animationLayer = self.animationLayer = new CanvasLayer({
        map: self.map,
        update: self._render
    });

    self.animationLayer = animationLayer.canvas.getContext('2d');
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

export default Windy;