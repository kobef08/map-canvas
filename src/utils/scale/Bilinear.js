import util from 'util';

var getPixelPosition = function (width, x, y) {
    return (x + y * width) << 2;
}

var calculateInterpolation = function (data, width, x, y) {
    var x0 = Math.floor(x);
    var y0 = Math.floor(y);
    var x1 = Math.ceil(x);
    var y1 = Math.ceil(y);
    x = x - x0;
    y = y - y0;
    // rgba
    var rgba = new Array(4);
    for (var n = 0; n < 3; n++) {
        rgba[n] = (1 - x) * (1 - y) * data[getPixelPosition(width, x0, y0) + n] +
            x * y * data[getPixelPosition(width, x1, y1) + n] +
            (1 - x) * y * data[getPixelPosition(width, x0, y1) + n] +
            x * (1 - y) * data[getPixelPosition(width, x1, y1) + n];
    }
    rgba[3] = 255;
    return rgba;
}

var Bilinear = function (data, width, height, scaleX, scaleY) {
    scaleX = scaleX || 1;
    scaleY = scaleY || scaleX;

    if (scaleX === 1 && scaleX === scaleY) {
        // return {
        //     data: data,
        //     width: width,
        //     height: height
        // };
        return new ImageData(data, width, height);
    }

    var nWidth = Math.floor(scaleX * width);
    var nHeight = Math.floor(scaleY * height);

    // 插值法是插空，下面计算真实插空的宽度
    scaleX = (nWidth - 1) / (width - 1);
    scaleY = (nHeight - 1) / (height - 1);

    var imageScaled = new Uint8ClampedArray(nWidth * nHeight * 4);

    util.each.xDirection(imageScaled, nWidth, 0, 0, nWidth, nHeight, function (i, x, y) {
        calculateInterpolation(data, width, x / scaleX, y / scaleY).map(function (color, n) {
            imageScaled[i + n] = color;
        });
    });

    // return {
    //     data: imageScaled,
    //     width: nWidth,
    //     height: nHeight
    // }
    return new ImageData(imageScaled, nWidth, nHeight)
}

export default Bilinear;