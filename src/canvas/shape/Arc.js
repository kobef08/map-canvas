/**
 * 圆弧
 */
function Arc() {
    this.type = 'arc';
    this.shape = {
        cx: 0,
        cy: 0,
        r: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        clockwise: true
    };
    this.style = {
        stroke: '#000',
        fill: null
    };
}

Arc.prototype.draw = function (ctx, shape) {
    var x = shape.cx;
    var y = shape.cy;
    var r = Math.max(shape.r, 0);
    var startAngle = shape.startAngle;
    var endAngle = shape.endAngle;
    var clockwise = shape.clockwise;

    var unitX = Math.cos(startAngle);
    var unitY = Math.sin(startAngle);

    ctx.moveTo(unitX * r + x, unitY * r + y);
    ctx.arc(x, y, r, startAngle, endAngle, !clockwise);
}