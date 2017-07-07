/**
 * 新建canvas
 * 
 * @param {number} width 宽
 * @param {number} height 高
 */
function Canvas(width, height) {
    var canvas;
    if (typeof document === 'undefined') {
        // var Canvas = require('canvas');
        // canvas = new Canvas(width, height);
    } else {
        var canvas = document.createElement('canvas');
        if (width) {
            canvas.width = canvas.style.width = width;
        }
        if (height) {
            canvas.height = canvas.style.height = height;
        }
    }
    return canvas;
}

export default Canvas;