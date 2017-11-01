import CanvasLayer from '../map/baidu-map/CanvasLayer';

function Layer(map, dataSet, options) {
    var self = this;

    self.map = map;

    self.init(options);

    var canvasLayer = this.canvasLayer = new CanvasLayer({

    });
}

Layer.prototype.init = function (options) {

}

Layer.prototype.clickEvent = function (e) {

}

Layer.prototype.mousemoveEvent = function (e) {

}

Layer.prototype.bindEvent = function (e) {

}

Layer.prototype.unbindEvent = function (e) {

}