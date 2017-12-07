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

            map.addLayer(baseCanvasLayer);
        },
        brush: function () {
            var baseCtx = this.ctx;
            if (!baseCtx) {
                return;
            }
            lineTool.addMarkLine();
            baseCtx.clearRect(0, 0, baseCtx.canvas.width, baseCtx.canvas.height);
            lineTool.markLines.forEach(function (line) {
                line.draw(baseCtx);
            });
        },
        addMarkLine: function () {
            var self = this;
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
        }
    };

    lineTool.init();
};

export default MoveLine;