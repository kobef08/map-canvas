export default {
    merge: function (settings, defaults) {
        Object.keys(settings).forEach(function (key) {
            defaults[key] = settings[key];
        });
    },
    //计算两点间距离
    getDistance: function (p1, p2) {
        return Math.sqrt(
            (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1])
        );
    },
    //判断点是否在线段上
    containStroke(x0, y0, x1, y1, lineWidth, x, y) {
        if (lineWidth === 0) {
            return false;
        }
        var _l = lineWidth;
        var _a = 0;
        var _b = x0;
        // Quick reject
        if (
            (y > y0 + _l && y > y1 + _l) ||
            (y < y0 - _l && y < y1 - _l) ||
            (x > x0 + _l && x > x1 + _l) ||
            (x < x0 - _l && x < x1 - _l)
        ) {
            return false;
        }

        if (x0 !== x1) {
            _a = (y0 - y1) / (x0 - x1);
            _b = (x0 * y1 - x1 * y0) / (x0 - x1);
        } else {
            return Math.abs(x - x0) <= _l / 2;
        }
        var tmp = _a * x - y + _b;
        var _s = tmp * tmp / (_a * _a + 1);
        return _s <= _l / 2 * _l / 2;
    },
    //是否在矩形内
    isPointInRect(point, bound) {
        var wn = bound.wn; //西北
        var es = bound.es; //东南
        return (point.x >= wn.x && point.x <= es.x && point.y >= wn.y && point.y <= es.y);
    },
    //是否在圆内
    isPointInCircle(point, center, radius) {
        var dis = this.getDistanceNew(point, center);
        return dis <= radius;
    },
    //两点间距离
    getDistanceNew(point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }
}