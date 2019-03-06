import CanvasLayer from '../map/baidu-map/CanvasLayer';
import tool from '../utils/tool';
import Palette from '../component/data-range/Palette';

var LineGradients = function (map, userOptions) {
    var self = this;

    self.map = map;
    self.lines = [];
    self.pixelList = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 1,
    };

    //全局变量
    var baseLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    function Point(opts) {
        this.name = opts.name;
        this.lon = opts.Longitude;
        this.lat = opts.Latitude;
        this.value = opts.value;
        this.time = opts.time;
    }

    function Line(opts) {
        this.name = opts.name;
        this.path = opts.path;
    }

    Line.prototype.getPointList = function () {
        var points = [],
            path = this.path;
        if (path && path.length > 0) {
            path.forEach(function (p) {
                points.push({
                    name: p.name,
                    pixel: map.pointToPixel(p.location),
                    value: p.value,
                    time: p.time,
                    color: p.color
                });
            })
        }
        return points;
    }

    Line.prototype.draw = function (context) {
        var pointList = this.pixelList || this.getPointList();
        context.save();
        context.beginPath();
        context.lineWidth = options.lineWidth;
        for (var i = 0, len = pointList.length; i < len; i++) {
            context.strokeStyle = pointList[i].color;
            context.moveTo(pointList[i].pixel.x, pointList[i].pixel.y);
            context.lineTo(pointList[i + 1].pixel.x, pointList[i + 1].pixel.y);
            context.stroke();
        }
        context.closePath();
        context.restore();
    }

    //底层canvas渲染，标注，线条
    var brush = function () {
        var baseCtx = baseLayer.canvas.getContext('2d');
        if (!baseCtx) {
            return;
        }

        addLine();

        baseCtx.clearRect(0, 0, width, height);

        self.pixelList = [];
        self.lines.forEach(function (line) {
            self.pixelList.push({
                name: line.name,
                data: line.getPointList()
            })
            line.draw(baseCtx);
        });
    }

    var addLine = function () {
        if (self.lines && self.lines.length > 0) return;
        var dataset = options.data;
        var palette = new Palette({
            min: 600,
            max: 1100
        });

        dataset.forEach(function (l, i) {
            var line = new Line({
                name: l.name,
                path: []
            });
            l.data.forEach(function (p, j) {
                line.path.push({
                    name: p.name,
                    location: new BMap.Point(p.Longitude, p.Latitude),
                    value: p.value,
                    time: p.time,
                    color: palette.getColor(p.value)
                });
            });
            self.lines.push(line);
        });
    }

    self.init(userOptions, options)

    baseLayer = new CanvasLayer({
        map: map,
        update: brush
    });

    this.clickEvent = this.clickEvent.bind(this);

    this.bindEvent();
};

LineGradients.prototype.init = function (settings, defaults) {
    //合并参数
    tool.merge(settings, defaults);

    this.options = defaults;
}

LineGradients.prototype.bindEvent = function (e) {
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.click) {
            map.setDefaultCursor("default");
            map.addEventListener('click', this.clickEvent);
        }
        if (this.options.methods.mousemove) {
            map.setDefaultCursor("default");
            map.addEventListener('mousemove', this.clickEvent);
        }
    }
}

LineGradients.prototype.clickEvent = function (e) {
    var self = this,
        lines = self.pixelList;
    if (lines.length > 0) {
        lines.forEach(function (line, i) {
            for (var j = 0; j < line.data.length; j++) {
                var beginPt = line.data[j].pixel;
                if (line.data[j + 1] == undefined) {
                    return;
                }
                var endPt = line.data[j + 1].pixel;
                var curPt = e.pixel;
                var isOnLine = tool.containStroke(beginPt.x, beginPt.y, endPt.x, endPt.y, self.options.lineWidth, curPt.x, curPt.y);
                if (isOnLine) {
                    self.options.methods.click(e, line.name);
                    return;
                }
            }

        });
    }
}

export default LineGradients;