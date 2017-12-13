import CanvasLayer from '../map/openlayers/CanvasLayer';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../animation/requestAnimationFrame';

var MoveLine = function (map, userOptions) {
    var self = this;

    //默认参数
    var defaultOpts = {
        //线条宽度
        lineWidth: 1,
        //线条颜色
        strokeStyle: '#F9815C'
    };

    //参数合并
    var merge = function (userOptions, defaultOpts) {
        Object.keys(userOptions).forEach(function (key) {
            defaultOpts[key] = userOptions[key];
        });
    }

    function Marker(opts) {
        this.city = opts.name;
        this.lonlat = opts.lonlat;
        this.speed = opts.speed || 0.15;
        this.radius = 0;
        this.max = opts.max || 20;
    }

    Marker.prototype.draw = function (context) {
        context.save();
        context.beginPath();
        var pixel = map.getPixelFromLonLat(this.lonlat);
        context.strokeStyle = defaultOpts.strokeStyle;
        context.moveTo(pixel.x + this.radius, pixel.y);
        context.arc(pixel.x, pixel.y, this.radius, 0, Math.PI * 2);
        context.stroke();
        context.closePath();
        context.restore();
    }

    function MarkLine(opts) {
        this.name = opts.name;
        this.from = opts.from;
        this.to = opts.to;
    }

    MarkLine.prototype.draw = function (context) {
        var fromPixel = map.getPixelFromLonLat(this.from);
        var toPixel = map.getPixelFromLonLat(this.to);
        context.beginPath();
        context.lineWidth = defaultOpts.lineWidth;
        context.strokeStyle = defaultOpts.strokeStyle;
        context.moveTo(fromPixel.x, fromPixel.y);
        context.lineTo(toPixel.x, toPixel.y);
        context.stroke();
    }

    //初始化
    var lineTool = {
        markLines: [],
        init: function () {
            merge(userOptions, defaultOpts);

            var baseCanvasLayer = this.baseCanvasLayer = new CanvasLayer("mycanvas", {
                render: this.brush
            });

            var animateLayer = this.animateLayer = new CanvasLayer("animateCanvas", {
                render: this.animation
            });

            map.addLayer(baseCanvasLayer);
            map.addLayer(animateLayer);

            (function drawFrame() {
                requestAnimationFrame(drawFrame);
                lineTool.animation();
            }());
        },
        brush: function () {
            var context = this.ctx;
            if (!context) {
                return;
            }
            lineTool.addMarkLine();
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            lineTool.markLines.forEach(function (line) {
                line.draw(context);
            });
        },
        addMarkLine: function () {
            var self = this;
            if (self.markLines && self.markLines.length > 0) return;
            self.markLines = [];
            var dataset = defaultOpts.data;
            dataset.forEach(function (line, i) {
                self.markLines.push(new MarkLine({
                    from: new OpenLayers.LonLat(line.from[0], line.from[1]).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject()
                    ),
                    to: new OpenLayers.LonLat(line.to[0], line.to[1]).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject()
                    )
                }));
            });
        },
        animation: function () {
            var context = lineTool.animateLayer.ctx;
            if (!context) {
                return;
            }

            lineTool.addMarker();

            context.fillStyle = 'rgba(0,0,0,.97)';
            var prev = context.globalCompositeOperation;
            context.globalCompositeOperation = 'destination-in';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.globalCompositeOperation = prev;

            lineTool.markers.forEach(function (marker) {
                marker.draw(context);
                marker.radius += marker.speed;
                if (marker.radius > marker.max) {
                    marker.radius = 0;
                }
            });
        },
        addMarker: function () {
            var self = this;
            if (self.markers && self.markers.length > 0) return;
            self.markers = [];
            var dataset = defaultOpts.data;
            dataset.forEach(function (line, i) {
                var marker = line.to;
                self.markers.push(new Marker({
                    lonlat: new OpenLayers.LonLat(marker[0], marker[1]).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject()
                    ),
                    city: marker[2],
                    max: Math.floor(Math.random() * 20 + 10)
                }));
            });
        }
    };

    lineTool.init();
};

export default MoveLine;