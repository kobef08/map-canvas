(function () {
    IMAP.CustomerOverlay = IMAP.Class({
        initialize: function (data, options) {
            this._id = 'CustomerOverlay';
            this._options = options || {};
            this._max = 1;
            this._min = 0;
            this.bounds = null;
            this._datas = [];
            this.setData(data || []);
            this._element = null;
            this.animationFlag = true;
        },
        setData: function (data) {
            var markLines = this.markLines = []
            data.forEach(function (line, i) {
                markLines.push(new MarkLine({
                    id: i,
                    from: new Marker({
                        city: line.from.city,
                        location: new IMAP.LngLat(line.from.lnglat[0], line.from.lnglat[1]),
                        color: options.colors[i]
                    }),
                    to: new Marker({
                        city: line.to.city,
                        location: new IMAP.LngLat(line.to.lnglat[0], line.to.lnglat[1]),
                        color: options.colors[i]
                    })
                }));
            });
            //this.update();
        },
        update: function () {
            var markLines = this.markLines;
            //底层canvas
            var backCtx = this.backCanvas.getContext('2d');
            if (!backCtx) {
                return;
            }
            backCtx.clearRect(0, 0, this.backCanvas.width, this.backCanvas.height);

            markLines.forEach(function (line) {
                line.drawMarker(backCtx);
                line.drawLinePath(backCtx);
            });

            this._render();
        },
        _render: function () {
            //上层canvas渲染，动画效果
            var markLines = this.markLines;
            var animationCtx = this.animationCanvas.getContext('2d');
            if (!animationCtx) {
                return;
            }

            if (!this.animationFlag) {
                animationCtx.clearRect(0, 0, this.animationCanvas.width, this.animationCanvas.height);
                return;
            }

            animationCtx.fillStyle = 'rgba(0,0,0,.93)';
            var prev = animationCtx.globalCompositeOperation;
            animationCtx.globalCompositeOperation = 'destination-in';
            animationCtx.fillRect(0, 0, this.animationCanvas.width, this.animationCanvas.height);
            animationCtx.globalCompositeOperation = prev;

            for (var i = 0; i < markLines.length; i++) {
                var markLine = markLines[i];
                markLine.drawMoveCircle(animationCtx); //移动圆点
            }
        },
        resize: function (a) {
            var b = this._map;
            if (b) {
                var c = b.getSize(),
                    b = c.width,
                    c = c.height;
                if (this._width != b || this._height != c) {
                    this._width = b;
                    this._height = c;
                    var f = this._element;
                    f.style.height = c + "px";
                    f.style.width = b + "px";
                }
            }
        },
        _redraw: function () {
            var self = this;
            var a = this._map,
                b = this._element;
            if (a && b) {
                var c = a.getBounds(),
                    f = a.lnglatToPixel(c.northeast),
                    a = a.lnglatToPixel(c.southwest),
                    f = f.y;
                b.style.left = a.x + "px";
                b.style.top = f + "px";
                this.resize(!0);
                this.update();
            }

        },
        _createElement: function () {
            var b = this._map;
            if (!this._element && b) {
                var height = this._height,
                    width = this._width;
                var div = document.createElement('div');
                div.style.cssText = "position:absolute;left:0px;top:0px;border:0px;z-index:1000;width:" + width + "px;height:" + height + "px;";
                this._element = this._options.container = div;
                b.getOverlayLayer().getElement().appendChild(div);
                this._element.appendChild(this._createCanvas('backCanvas'));
                this._element.appendChild(this._createCanvas('animationCanvas'));
                this._redraw();

                //动画渲染
                var self = this;
                (function drawFrame() {
                    requestAnimationFrame(drawFrame);
                    self._render();
                })();
            }
        },
        _createCanvas: function (id) {
            var canvas = this[id] = document.createElement('canvas');
            canvas.id = id;
            canvas.width = this._width;
            canvas.height = this._height;
            canvas.style.width = canvas.width;
            canvas.style.height = canvas.height;
            canvas.style.position = 'absolute';
            canvas.style.top = '0px';
            canvas.style.left = '0px';
            return canvas;
        },
        getElement: function () {
            return this._element;
        },
        _draw: function () {
            this._createElement();
        },
        _destroy: function (a) {
            (a = this._element) && a.parentNode && a.parentNode.removeChild(a);
            this._map = this._element = null
        },
        setMap: function (a) {
            if (a instanceof IMAP.Map) {
                this._map = a;
                var b = a.getSize();
                this._width = b.width;
                this._height = b.height;
                this._mEvtzs = a.addEventListener(IMAP.Constants.ZOOM_START, this._clear, this);
                this._mEvtz = a.addEventListener(IMAP.Constants.ZOOM_END, this._redraw, this);
                this._mEvtd = a.addEventListener(IMAP.Constants.DRAG_END, this._redraw, this);
                this._mEvtm = a.addEventListener(IMAP.Constants.MOVE_END, this._redraw, this);
                this._draw()
            } else
                this._mEvtz && (this._map.removeEventListener(this._mEvtz),
                    this._map.removeEventListener(this._mEvtd),
                    this._map.removeEventListener(this._mEvtm),
                    this._mEvtz = this._mEvtd = this._mEvtm = null),
                this._destroy()
        },
        getMap: function () {
            return this._map
        },
        getId: function () {
            return this._id
        },
        _clear: function () {
            animationFlag = false;
            var backCtx = this.backCanvas.getContext('2d');
            backCtx.clearRect(0, 0, this.backCanvas.width, this.backCanvas.height);
            var animationCtx = this.animationCanvas.getContext('2d');
            animationCtx.clearRect(0, 0, this.animationCanvas.width, this.animationCanvas.height);
        }
    });
    IMAP.CustomerOverlayOptions = IMAP.Class({
        visible: null,
        radius: null,
        gradient: null,
        opacity: null
    })

    var options = {
        //marker点半径
        markerRadius: 2,
        //marker点颜色,为空或null则默认取线条颜色
        markerColor: null,
        //线条类型 solid、dashed、dotted
        lineType: 'solid',
        //线条宽度
        lineWidth: 1,
        //线条颜色
        colors: ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'],
        //移动点半径
        moveRadius: 2,
        //移动点颜色
        fillColor: '#fff',
        //移动点阴影颜色
        shadowColor: '#fff',
        //移动点阴影大小
        shadowBlur: 5
    };

    function Marker(opts) {
        this.city = opts.city;
        this.location = opts.location;
        this.color = opts.color;
    }

    Marker.prototype.draw = function (context) {
        // var pixel = this.pixel = map.lnglatToPixel(this.location);
        var pixel = this.pixel = this.convertPixel(this.location);

        context.save();
        context.beginPath();
        context.fillStyle = options.markerRadius || this.color;
        context.arc(pixel.x, pixel.y, options.markerRadius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = '12px Microsoft YaHei';
        context.fillStyle = this.color;
        context.fillText(this.city, pixel.x, pixel.y - 10);
        context.restore();
    };

    Marker.prototype.convertPixel = function (lnglat) {
        var bounds = map.getBounds(),
            ne = map.lnglatToPixel(bounds.northeast).y,
            sw = map.lnglatToPixel(bounds.southwest).x,
            pixel = {};

        pixel = map.lnglatToPixel(lnglat);
        pixel = new IMAP.Pixel(pixel.x - sw, pixel.y - ne);

        return pixel;
    }

    function MarkLine(opts) {
        this.from = opts.from;
        this.to = opts.to;
        this.id = opts.id;
        this.step = 0;
    }

    MarkLine.prototype.getPointList = function (from, to) {
        var points = [
            [from.x, from.y],
            [to.x, to.y]
        ];
        var ex = points[1][0];
        var ey = points[1][1];
        points[3] = [ex, ey];
        points[1] = this.getOffsetPoint(points[0], points[3]);
        points[2] = this.getOffsetPoint(points[3], points[0]);
        points = this.smoothSpline(points, false);
        //修正最后一点在插值产生的偏移
        points[points.length - 1] = [ex, ey];
        return points;
    };

    MarkLine.prototype.getOffsetPoint = function (start, end) {
        var distance = this.getDistance(start, end) / 3; //除以3？
        var angle, dX, dY;
        var mp = [start[0], start[1]];
        var deltaAngle = -0.2; //偏移0.2弧度
        if (start[0] != end[0] && start[1] != end[1]) {
            //斜率存在
            var k = (end[1] - start[1]) / (end[0] - start[0]);
            angle = Math.atan(k);
        } else if (start[0] == end[0]) {
            //垂直线
            angle = (start[1] <= end[1] ? 1 : -1) * Math.PI / 2;
        } else {
            //水平线
            angle = 0;
        }
        if (start[0] <= end[0]) {
            angle -= deltaAngle;
            dX = Math.round(Math.cos(angle) * distance);
            dY = Math.round(Math.sin(angle) * distance);
            mp[0] += dX;
            mp[1] += dY;
        } else {
            angle += deltaAngle;
            dX = Math.round(Math.cos(angle) * distance);
            dY = Math.round(Math.sin(angle) * distance);
            mp[0] -= dX;
            mp[1] -= dY;
        }
        return mp;
    };

    MarkLine.prototype.smoothSpline = function (points, isLoop) {
        var len = points.length;
        var ret = [];
        var distance = 0;
        for (var i = 1; i < len; i++) {
            distance += this.getDistance(points[i - 1], points[i]);
        }
        var segs = distance / 2;
        segs = segs < len ? len : segs;
        for (var i = 0; i < segs; i++) {
            var pos = i / (segs - 1) * (isLoop ? len : len - 1);
            var idx = Math.floor(pos);
            var w = pos - idx;
            var p0;
            var p1 = points[idx % len];
            var p2;
            var p3;
            if (!isLoop) {
                p0 = points[idx === 0 ? idx : idx - 1];
                p2 = points[idx > len - 2 ? len - 1 : idx + 1];
                p3 = points[idx > len - 3 ? len - 1 : idx + 2];
            } else {
                p0 = points[(idx - 1 + len) % len];
                p2 = points[(idx + 1) % len];
                p3 = points[(idx + 2) % len];
            }
            var w2 = w * w;
            var w3 = w * w2;

            ret.push([this.interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), this.interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)]);
        }
        return ret;
    };

    MarkLine.prototype.interpolate = function (p0, p1, p2, p3, t, t2, t3) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
    };

    MarkLine.prototype.getDistance = function (p1, p2) {
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    };

    MarkLine.prototype.drawMarker = function (context) {
        this.from.draw(context);
        this.to.draw(context);
    };

    MarkLine.prototype.drawLinePath = function (context) {
        // var pointList = this.path = this.getPointList(map.lnglatToPixel(this.from.location), map.lnglatToPixel(this.to.location));
        var pointList = this.path = this.getPointList(this.from.convertPixel(this.from.location), this.to.convertPixel(this.to.location));

        var len = pointList.length;
        context.save();
        context.beginPath();
        context.lineWidth = options.lineWidth;
        context.strokeStyle = options.colors[this.id];

        if (!options.lineType || options.lineType == 'solid') {
            context.moveTo(pointList[0][0], pointList[0][1]);
            for (var i = 0; i < len; i++) {
                context.lineTo(pointList[i][0], pointList[i][1]);
            }
        } else if (options.lineType == 'dashed' || options.lineType == 'dotted') {
            for (var i = 1; i < len; i += 2) {
                context.moveTo(pointList[i - 1][0], pointList[i - 1][1]);
                context.lineTo(pointList[i][0], pointList[i][1]);
            }
        }
        context.stroke();
        context.restore();
        this.step = 0; //缩放地图时重新绘制动画
    };

    MarkLine.prototype.drawMoveCircle = function (context) {
        // var pointList = this.path || this.getPointList(map.lnglatToPixel(this.from.location), map.lnglatToPixel(this.to.location));
        var pointList = this.path || this.getPointList(this.from.convertPixel(this.from.location), this.to.convertPixel(this.to.location));

        context.save();
        context.fillStyle = options.fillColor;
        context.shadowColor = options.shadowColor;
        context.shadowBlur = options.shadowBlur;
        context.beginPath();
        context.arc(pointList[this.step][0], pointList[this.step][1], options.moveRadius, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.restore();
        this.step += 1;
        if (this.step >= pointList.length) {
            this.step = 0;
        }
    };

    var global = typeof window === 'undefined' ? {} : window;

    var requestAnimationFrame = global.requestAnimationFrame ||
        global.mozRequestAnimationFrame ||
        global.webkitRequestAnimationFrame ||
        global.msRequestAnimationFrame ||
        function (callback) {
            return global.setTimeout(callback, 1000 / 60);
        };
})();