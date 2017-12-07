OpenLayers.Layer.CanvasLayer = OpenLayers.Class(OpenLayers.Layer, {
    points: null,
    canvas: null,
    initialize: function (name, options) {
        OpenLayers.Layer.prototype.initialize.apply(this, arguments);
        this.points = [];

        var canvas = this.canvas = document.createElement('canvas');
        var ctx = this.ctx = this.canvas.getContext('2d');
        canvas.style.cssText = 'position:absolute;' +
            'left:0;' +
            'top:0;' +
            'z-index:0;';
        this.adjustRadio();
        this.div.appendChild(canvas);
    },
    adjustSize: function () {
        var size = this.map.getSize();
        var canvas = this.canvas;
        canvas.width = size.w;
        canvas.height = size.h;
        canvas.style.width = size.w + 'px';
        canvas.style.height = size.h + 'px';
    },
    adjustRadio: function () {
        var ctx = this.ctx;
        var backingStore = ctx.backingStorePixelRatio ||
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
        var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
        var canvasWidth = ctx.canvas.width;
        var canvasHeight = ctx.canvas.height;
        ctx.canvas.width = canvasWidth * pixelRatio;
        ctx.canvas.height = canvasHeight * pixelRatio;
        ctx.canvas.style.width = canvasWidth + 'px';
        ctx.canvas.style.height = canvasHeight + 'px';
        // console.log(ctx.canvas.height, canvasHeight);
        ctx.scale(pixelRatio, pixelRatio);
    },
    moveTo: function (bounds, zoomChanged, dragging) {
        var self = this;
        self.adjustSize();
        OpenLayers.Layer.prototype.moveTo.apply(self, arguments);

        clearTimeout(self.timeoutID);
        self.timeoutID = setTimeout(function () {
            self._draw();
        }, 15);
    },
    _draw: function () {
        var map = this.map;
        var size = map.getSize();
        var center = map.getCenter();
        if (center) {
            var pixel = map.getLayerPxFromLonLat(center);
            this.canvas.style.left = pixel.x - size.w / 2 + 'px';
            this.canvas.style.top = pixel.y - size.h / 2 + 'px';

            this.options.render && this.options.render.call(this);
        }
    },
    CLASS_NAME: 'OpenLayers.Layer.CanvasLayer'
});

export default OpenLayers.Layer.CanvasLayer;