import tool from '../utils/tool';

var MoveLine = function (map, userOptions) {
    var self = this;
    self.map = map;
    self.lines = [];
    self.pixelList = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 1,
        //线条颜色
        lineStyle: '#F9815C'
    };

    //全局变量
    var baseLayer = null,
        width = map.width,
        height = map.height;

    function Line(opts) {
        this.path = opts.path;
    }

    Line.prototype.getPointList = function () {
        var points = [],
            path = this.path;
        if (path && path.length > 0) {
            path.forEach(function (p) {
                points.push({
                    pixel: map.toScreen(p.location)
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
        var baseCtx = options.canvas.getContext('2d');
        if (!baseCtx) {
            return;
        }

        addLine();

        baseCtx.clearRect(0, 0, width, height);

        self.pixelList = [];
        self.lines.forEach(function (line) {
            self.pixelList.push({
                data: line.getPointList()
            })
            line.draw(baseCtx);
        });
    }

    var addLine = function () {
        if (self.lines && self.lines.length > 0) return;
        var dataset = options.data;
        dataset.forEach(function (l, i) {
            var line = new Line({
                path: []
            });
            l.forEach(function (p, j) {
                line.path.push({
                    location: p
                });
            });
            self.lines.push(line);
        });
    }

    self.init(userOptions, options);

    brush();
}

MoveLine.prototype.init = function (setting, defaults) {
    //合并参数
    tool.merge(setting, defaults);
    this.options = defaults;
}

export default MoveLine;