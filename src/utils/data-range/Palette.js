import Canvas from '../Canvas';
/**
 * 调色板
 * 
 * @param {any} options 
 */
function Palette(options) {
    options = options || {};
    this.gradient = options.gradient || {
        0.25: 'rgba(0, 0, 255, 1)',
        0.55: 'rgba(0, 255, 0, 1)',
        0.85: 'rgba(255, 255, 0, 1)',
        1.0: 'rgba(255, 0, 0, 1)'
    };
    this.maxSize = options.maxSize;
    this.minSize = options.minSize;
    this.max = options.max || 100;
    this.min = otpions.min || 0;
    this.initPalette();
}

Palette.prototype.initPalette = function () {
    var gradient = this.gradient,
        canvas = new Canvas(256, 1),
        ctx = this.ctx = canvas.getContext('2d'),
        lineGradient = ctx.createLinearGradient(0, 0, 256, 1);
    for (var key in gradient) {
        lineGradient.addColorStop(parseFloat(key), gradient[key]);
    }
    ctx.fillStyle = lineGradient;
    ctx.fillRect(0, 0, 256, 1);
}

Palette.prototype.getImageData = function (value) {
    var imageData = this.ctx.getImageData(0, 0, 256, 1).data;
    if (value === undefined) {
        return imageData;
    }
    var max = this.max,
        min = this.min;
    if (value > max) {
        value = max;
    }
    if (value < min) {
        value = min;
    }
    var index = Math.floor((value - min) / (max - min) * (256 - 1)) * 4;
    return [imageData[index], imageData[index + 1], imageData[index + 2], , imageData[index + 3]];
}

Palette.prototype.getColor = function (value) {
    var imageData = this.getImageData(value);
    return 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',' + imageData[3] / 256 + ')';
}

Palette.prototype.getSize = function (value) {
    var size = 0,
        max = this.max,
        min = this.min,
        maxSize = this.maxSize,
        minSize = this.minSize;
    if (value > max) {
        value = max;
    }
    if (value < min) {
        value = min;
    }
    size = minSize + (value - min) / (max - min) * (maxSize - minSize);
    return size;
}

Palette.prototype.getLegend = function (options) {
    var gradient = this.gradient,
        width = options.width || 20,
        height = options.height || 180,
        canvas = new Canvas(width, height),
        ctx = canvas.getContext('2d'),
        lineGradient = ctx.createLinearGradient(0, height, 0, 0);
    for (var key in gradient) {
        lineGradient.addColorStop(parseFloat(key), gradient[key]);
    }
    ctx.fillStyle = lineGradient;
    ctx.fillRect(0, 0, width, height);
    return canvas;
}

Palette.prototype.setMax = function (value) {
    this.max = value || 100;
}

Palette.prototype.setMin = function (value) {
    this.min = value || 0;
}

Palette.prototype.setMaxSize = function (maxSize) {
    this.maxSize = maxSize || 35;
}

Palette.prototype.setMinSize = function (minSize) {
    this.minSize = minSize || 0;
}

export default Palette;