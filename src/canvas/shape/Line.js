/**
 * 直线
 */
function Line() {
    this.type = 'line';
    this.shape = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        percent: 1
    };
    this.style = {
        stroke: '#000',
        fill: null
    };
}

Line.prototype.draw = function (ctx, shape) {
    var x1 = shape.x1; //Start point
    var y1 = shape.y1;
    var x2 = shape.x2; //End point
    var y2 = shape.y2;
    var percent = shape.percent;

    if (percent === 0) {
        return;
    }

    ctx.moveTo(x1, y1);

    if (percent < 1) {
        x2 = x1 * (1 - percent) + x2 * percent;
        y2 = y1 * (1 - percent) + y2 * percent;
    }
    ctx.lineTo(x2, y2);
}

Line.prototype.pointAt = function (percent) {
    var shape = this.shape;
    return [
        shape.x1 * (1 - percent) + shape * x2 * percent,
        shape.y1 * (1 - percent) + shape * y2 * percent,
    ];
}

export default Line;