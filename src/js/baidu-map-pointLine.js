import CanvasLayer from '../map/baidu-map/CanvasLayer';

var PointLine = function (map, userOptions) {
    var self = this;

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
        height = map.getSize().height,
        lines = [];

    //参数合并
    var merge = function (userOptions, options) {
        Object.keys(userOptions).forEach(function (key) {
            options[key] = userOptions[key];
        });
    }

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

        lines.forEach(function (line) {
            line.draw(baseCtx);
        });
    }

    var addLine = function () {
        lines = [];
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
            lines.push(line);
        });
    }

    var init = function (map, options) {
        merge(userOptions, options);

        baseLayer = new CanvasLayer({
            map: map,
            update: brush
        });
    }

    init(map, options);

    self.options = options;
};

export default PointLine;