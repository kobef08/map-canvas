/**
 * 圆
 */
function Circle() {
    this.type = 'circle';
    this.shape = {
        cx: 0,
        cy: 0,
        r: 0
    };
}

Circle.prototype.draw = function (ctx, shape) {
    ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2, true);
}

export default Circle;