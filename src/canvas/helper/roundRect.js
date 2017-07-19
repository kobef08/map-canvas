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
            if (r.length === 1) {
                r1 = r2 = r3 = r4 = r[0];
            } else if (r.length === 2) {
                r1 = r3 = r[0];
                r2 = r4 = r[1];
            } else if (r.length === 3) {
                r1 = r[0];
                r2 = r4 = r[1];
                r3 = r[2];
            }
        }
    }
}