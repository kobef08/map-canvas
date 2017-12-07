var global = typeof window === 'undefined' ? {} : window;

var requestAnimationFrame = global.requestAnimationFrame ||
    global.mozRequestAnimationFrame ||
    global.webkitRequestAnimationFrame ||
    global.msRequestAnimationFrame ||
    function (callback) {
        return global.setTimeout(callback, 1000 / 60);
    };

var cancelAnimationFrame = global.cancelAnimationFrame ||
    global.mozCancelAnimationFrame ||
    global.webkitCancelAnimationFrame ||
    global.msCancelAnimationFrame ||
    function (id) {
        clearTimeout(id);
    };

export {
    requestAnimationFrame,
    cancelAnimationFrame
};