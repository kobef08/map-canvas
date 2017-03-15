var demos = [{
    name: 'baidu-map-flashMarker.js',
    build: true
}, {
    name: 'baidu-map-move.js',
    build: false
}, {
    name: 'baidu-map-typhoon.js',
    build: false
}, {
    name: 'baidu-map-wind.js',
    build: false
}];

var moduleName;
for (var i = 0; i < demos.length; i++) {
    var demo = demos[i];
    if (demo.build) {
        moduleName = demo.name;
    }
}

export default moduleName;