var demos = [{
    src: 'baidu-map-flashMarker.js',
    name: 'FlashMarker',
    build: false
}, {
    src: 'baidu-map-moveLine.js',
    name: 'MoveLine',
    build: false
}, {
    src: 'baidu-map-typhoon.js',
    name: 'Typhoon',
    build: true
}, {
    src: 'baidu-map-wind.js',
    name: 'Wind',
    build: false
}, {
    src: 'canvas-line.js',
    name: 'TrackLine',
    build: false
}, {
    src: 'canvas-legend.js',
    name: 'Legend',
    build: true
}, {
    src: 'baidu-map-windNew.js',
    name: 'Windy',
    build: false
}];

var module;
for (let i = 0; i < demos.length; i++) {
    if (demos[i].build) {
        module = demos[i];
        break;
    }
}

export default module;