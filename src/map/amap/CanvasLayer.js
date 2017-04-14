function CanvasLayer(options) {
    this.options = options || {};
    this._map = options.map;
}

CanvasLayer.prototype.init = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this._map.getSize().width();
    canvas.height = this._map.getSize().height();
}