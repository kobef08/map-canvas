var demos = [{
    src: 'baidu-map-flashMarker.js',
    name: 'FlashMarker',
    build: false
}, {
    src: 'baidu-map-moveLine.js',
    name: 'MoveLine',
    build: true
}, {
    src: 'baidu-map-typhoon.js',
    build: false
}, {
    src: 'baidu-map-wind.js',
    build: false
}];

var module;
for (var i = 0; i < demos.length; i++) {
    if (demos[i].build) {
        module = demos[i];
        break;
    }
}

export default module;