/**
 * 矩形
 */
function Rect() {
    this.type = 'rect';
    this.shape = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

Rect.prototype.draw = function (ctx, shape) {
    var x = shape.x;
    var y = shape.y;
    var width = shape.width;
    var height = shape.height;
    if (!shape.r) {
        ctx.rect(x, y, width, height);
    }else{
        ctx
    }
}