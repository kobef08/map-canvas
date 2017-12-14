import CanvasLayer from '../map/baidu-map/CanvasLayer';
import GeoUtils from '../map/baidu-map/GeoUtils';
import tool from '../utils/tool';

var PointLine = function (map, userOptions) {
    var self = this;

    self.map = map;
    self.lines = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 1,
        //线条颜色
        lineStyle: '#F9815C'
    };

    //全局变量
    var baseLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    function Point(opts) {
        this.name = opts.name;
        this.lon = opts.Longitude;
        this.lat = opts.Latitude;
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
                    pixel: map.pointToPixel(p.location)
                });
            })
        }
        return points;
    }

    Line.prototype.draw = function (context) {
        var pointList = this.getPointList();
        context.save();
        context.beginPath();
        context.lineWidth = options.lineWidth;
        context.strokeStyle = options.lineStyle;
        context.moveTo(pointList[0].pixel.x, pointList[0].pixel.y);
        for (var i = 0, len = pointList.length; i < len; i++) {
            context.lineTo(pointList[i].pixel.x, pointList[i].pixel.y);
        }
        context.stroke();
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

        self.lines.forEach(function (line) {
            line.draw(baseCtx);
        });
    }

    var addLine = function () {
        if (self.lines && self.lines.length > 0) return;
        var dataset = options.data;
        dataset.forEach(function (l, i) {
            var line = new Line({
                name: l.name,
                path: []
            });
            l.data.forEach(function (p, j) {
                line.path.push({
                    name: p.name,
                    location: new BMap.Point(p.Longitude, p.Latitude)
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

PointLine.prototype.init = function (settings, defaults) {
    //合并参数
    tool.merge(settings, defaults);

    this.options = defaults;
}

PointLine.prototype.bindEvent = function (e) {
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.click) {
            map.setDefaultCursor("default");
            map.addEventListener('click', this.clickEvent);
        }
    }
}

PointLine.prototype.clickEvent = function (e) {
    var self = this,
        lines = self.lines;
    if (lines.length > 0) {
        lines.forEach(function (line, i) {
            var pts = [];
            line.path.forEach(function (point, j) {
                pts.push(point.location);
            });
            var polyline = new BMap.Polyline(pts);
            var isOnLine = GeoUtils.isPointOnPolyline(e.point, polyline);
            if (isOnLine) {
                self.options.methods.click(e, line.name);
                return;
            }
        });
    }

}

export default PointLine;