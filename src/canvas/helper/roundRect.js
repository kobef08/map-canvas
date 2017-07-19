export default {
    draw: function (ctx, shape) {
        var x = shape.x;
        var y = shape.y;
        var width = shape.width;
        var height = shape.height;
        var r = shape.r;
        var r1;
        var r2;
        var r3;
        var r4;

        if (width < 0) {
            x = x + width;
            width = -width;
        }
        if (height < 0) {
            y = y + height;
            height = -height;
        }

        if (typeof r === 'number') {
            r1 = r2 = r3 = r4 = r;
        } else if (r instanceof Array) {
            r1 = r2 = r3 = r4 = r[0];
        }
    }
}