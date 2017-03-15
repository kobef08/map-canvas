var demos = [{
    name: 'baidu-map-flashMarker.js',
    build: false
}, {
    name: 'baidu-map-move.js',
    build: false
}, {
    name: 'baidu-map-typhoon.js',
    build: false
}, {
    name: 'baidu-map-wind.js',
    build: false
}, {
    name: 'test.js',
    build: true
}];

var moduleName;
for (var i = 0; i < demos.length; i++) {
    if (demos[i].build) {
        moduleName = demos[i].name;
        break;
    }
}

export default moduleName;