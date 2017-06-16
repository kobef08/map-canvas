import CanvasLayer from '../map/baidu-map/CanvasLayer';
import tool from '../utils/tool';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../utils/requestAnimationFrame';

var Windy = function (map, userOptions) {
    var self = this;

    //默认参数
    var options = {
        MAX_PARTICLE_AGE: 100,
        FRAME_RATE: 20,
        PARTICLE_MULTIPLIER: 8,
        size: .8,
        color: 'rgba(71,160,233,0.8)'
    };

    //全局变量
    var windLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    //参数合并
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