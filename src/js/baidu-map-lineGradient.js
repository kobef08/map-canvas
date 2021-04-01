import CanvasLayer from '../map/baidu-map/CanvasLayer';
import tool from '../utils/tool';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../animation/requestAnimationFrame';

var LineGradient = function (map, userOptions) {
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
        animationLayer = null,
        animationFlag = true,
        width = map.getSize().width,
        height = map.getSize().height;

    function Point(opts) {
        this.code = opts.code;
        this.name = opts.name;
        this.lon = opts.Longitude;
        this.lat = opts.Latitude;
        this.value = opts.value;
        this.time = opts.time;
        this.height = opts.height;
    }

    function Line(opts) {
        this.name = opts.name;
        this.label = opts.label;
        this.labelColor = opts.labelColor;
        this.path = opts.path;
        this.step = 0;
    }

    Line.prototype.getPointList = function () {
        var points = [],
            path = this.path;
        if (path && path.length > 0) {
            path.forEach(function (p) {
                points.push({
                    code: p.code,
                    name: p.name,
                    location: p.location,
                    pixel: map.pointToPixel(p.location),
                    height: p.height,
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

        for (var i = 0, len = pointList.length; i < len - 1; i++) {
            context.save();
            context.beginPath();
            // context.lineCap = "round";
            // context.lineJoin = "round";
            context.lineWidth = options.lineWidth;
            context.strokeStyle = pointList[i].color;
            context.moveTo(pointList[i].pixel.x, pointList[i].pixel.y);
            context.lineTo(pointList[i + 1].pixel.x, pointList[i + 1].pixel.y);
            context.stroke();
            context.closePath();
            context.restore();
        }

        var lastpoint = pointList[pointList.length - 1];
        context.font = 'bold 14px Arial';
        context.textAlign = 'left';
        context.textBaseline = 'middle';
        context.fillStyle = this.labelColor;
        context.fillText(this.label, lastpoint.pixel.x, lastpoint.pixel.y);
    }

    Line.prototype.drawMoveCircle = function (context) {
        var pointList = this.pixelList || this.getPointList();

        context.save();
        context.fillStyle = '#fff';
        context.shadowColor = '#fff';
        context.shadowBlur = 5;
        context.beginPath();
        context.arc(pointList[this.step].pixel.x, pointList[this.step].pixel.y, 3, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.restore();
        this.step += 1;
        if (this.step >= pointList.length) {
            this.step = 0;
        }
    }

    Line.prototype.drawArrow = function (context, map) {
        var pointList = this.pixelList || this.getPointList();
        // for (var i = 0, len = pointList.length; i < len - 1; i++) {
        if (this.step >= pointList.length - 1) {
            this.step = 0;
        }
        context.beginPath();
        // context.lineWidth = options.animateLineWidth;
        context.lineWidth = 5;
        context.strokeStyle = '#fff';
        context.moveTo(pointList[this.step].pixel.x, pointList[this.step].pixel.y);
        context.lineTo(pointList[this.step + 1].pixel.x, pointList[this.step + 1].pixel.y);
        context.stroke();

        context.save();
        context.translate(pointList[this.step + 1].pixel.x, pointList[this.step + 1].pixel.y);
        //我的箭头本垂直向下，算出直线偏离Y的角，然后旋转 ,rotate是顺时针旋转的，所以加个负号
        var ang = (pointList[this.step + 1].pixel.x - pointList[this.step].pixel.x) / (pointList[this.step + 1].pixel.y - pointList[this.step].pixel.y);
        ang = Math.atan(ang);
        pointList[this.step + 1].pixel.y - pointList[this.step].pixel.y >= 0 ? context.rotate(-ang) : context.rotate(Math.PI - ang); //加个180度，反过来
        context.lineTo(-6, -6);
        context.lineTo(0, 6);
        context.lineTo(6, -6);
        context.lineTo(0, 0);
        context.fillStyle = '#fff';
        context.fill(); //箭头是个封闭图形
        context.restore(); //用来恢复Canvas之前保存的状态,否则会影响后续绘制

        this.step += 1;
        // }
    };

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
                label: line.label,
                labelColor: line.labelColor,
                data: line.getPointList()
            })
            line.draw(baseCtx);
        });
    }

    //中层canvas渲染，动画效果
    var render = function () {
        var animationCtx = animationLayer.canvas.getContext('2d');
        if (!animationCtx) {
            return;
        }

        if (!animationFlag) {
            animationCtx.clearRect(0, 0, width, height);
            return;
        }

        animationCtx.fillStyle = 'rgba(0,0,0,.2)';
        var prev = animationCtx.globalCompositeOperation;
        animationCtx.globalCompositeOperation = 'destination-in';
        animationCtx.fillRect(0, 0, width, height);
        animationCtx.globalCompositeOperation = prev;

        var lines = self.lines;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            // line.drawMoveCircle(animationCtx); //移动圆点
            line.drawArrow(animationCtx) //画箭头
        }
    }

    //鼠标事件
    var mouseInteract = function () {
        map.addEventListener('movestart', function () {
            animationFlag = false;
        });

        map.addEventListener('moveend', function () {
            animationFlag = true;
            self.lines = []; //解决拖动后多余的小圆点bug，没想明白，暂时这样
        });

        map.addEventListener('zoomstart', function () {
            animationFlag = false;
        });

        map.addEventListener('zoomend', function () {
            animationFlag = true;
            self.lines = [];
        });
    }

    var addLine = function () {
        if (self.lines && self.lines.length > 0) return;
        var dataset = options.data;
        var legend = new Legend();

        dataset.forEach(function (l, i) {
            var line = new Line({
                name: l.name,
                label: l.label,
                labelColor: l.labelColor,
                path: []
            });
            l.data.forEach(function (p, j) {
                line.path.push({
                    code: p.code,
                    name: p.name,
                    location: new BMap.Point(p.Longitude, p.Latitude),
                    height: p.height,
                    value: p.value,
                    time: p.time,
                    color: legend.getColor(p.value).color
                });
            });
            self.lines.push(line);
        });
    }

    var Legend = function () {
        var options = {
            width: 400,
            height: 15,
            range: [700, 750, 800, 850, 900, 950, 1000, 1050, 1100],
            // gradient: {
            //     0: 'rgba(100,255,51,1)',
            //     0.167: 'rgba(153,255,51,1)',
            //     0.333: 'rgba(204,255,51,1)',
            //     0.5: 'rgba(255,255,71,0.8)',
            //     0.667: 'rgba(255,250,150,1',
            //     0.833: 'rgba(255,187,102,0.9)',
            //     1: 'rgba(255,119,68,0.9)'
            // }
            gradient: {
                0.1: '#fe0000',
                0.4: '#ffaa01',
                0.7: '#b0e000',
                1.0: '#38a702'
            }
        };

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = options.width;
        canvas.height = options.height;
        var grad = context.createLinearGradient(0, 0, canvas.width, canvas.height);
        for (var gradient in options.gradient) {
            grad.addColorStop(gradient, options.gradient[gradient]);
        }
        context.fillStyle = grad;
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        this.d2Hex = function (d) {
            // Converts a decimal number to a two digit Hex value
            var hex = Number(d).toString(16);
            while (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex.toUpperCase();
        };
        this.getRgbColor = function (point) {
            var imageData = this.imageData || context.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;
            var i = ((point.Y * canvas.width) + point.X) * 4;
            var rgb = [],
                color = '#',
                objRgbColor = {
                    "rgb": rgb,
                    "color": color
                };
            for (var j = 0; j < 3; j++) {
                rgb.push(data[i + j]);
                color += this.d2Hex(data[i + j]);
            }
            objRgbColor.color = color;
            return objRgbColor;
        };
        this.getColor = function (value) {
            var colorValue = value - options.range[0];
            var point = Math.round((colorValue * canvas.width) / (options.range[options.range.length - 1] - options.range[0]));
            return this.getRgbColor({
                X: point,
                Y: 1
            });
        };
    }

    self.init(userOptions, options);

    baseLayer = new CanvasLayer({
        map: map,
        update: brush
    });

    animationLayer = new CanvasLayer({
        map: map,
        update: render
    });

    mouseInteract();

    (function drawFrame() {
        self.timer = setTimeout(function () {
            self.animationId = requestAnimationFrame(drawFrame);
            render();
        }, 1000 / 10);

        // requestAnimationFrame(drawFrame);
        // render();
    }());

    this.clickEvent = this.clickEvent.bind(this);

    this.bindEvent();
};

LineGradient.prototype.init = function (settings, defaults) {
    //合并参数
    tool.merge(settings, defaults);
    this.options = defaults;
}

LineGradient.prototype.bindEvent = function (e) {
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

LineGradient.prototype.clickEvent = function (e) {
    var self = this,
        flag = false,
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
                var inCircle = tool.isPointInCircle(curPt, beginPt, self.options.lineWidth);
                if (inCircle) {
                    // self.options.methods.click(e, line.name);
                    self.options.methods.mousemove(e, line.data[j]);
                    flag = true;
                    return;
                }
                // var isOnLine = tool.containStroke(beginPt.x, beginPt.y, endPt.x, endPt.y, self.options.lineWidth, curPt.x, curPt.y);
                // if (isOnLine) {
                //     // self.options.methods.click(e, line.name);
                //     self.options.methods.mousemove(e, line);
                //     return;
                // }
            }

        });
        if (!flag) {
            document.getElementById('tooltips').style.visibility = 'hidden';
        }
    }
}

export default LineGradient;