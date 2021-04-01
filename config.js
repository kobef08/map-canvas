var demos = [{
    src: 'baidu-map-flashMarker.js',
    name: 'FlashMarker',
    build: false
}, {
    src: 'baidu-map-moveLine.js',
    name: 'MoveLine',
    build: false
}, {
    src: 'baidu-map-typhoonNew.js',
    name: 'Typhoon',
    build: true
}, {
    src: 'baidu-map-wind.js',
    name: 'Wind',
    build: false
}, {
    src: 'baidu-map-pointLine.js',
    name: 'PointLine',
    build: false
}, {
    src: 'canvas-line.js',
    name: 'TrackLine',
    build: false
}, {
    src: 'canvas-legend.js',
    name: 'Legend',
    build: false
}, {
    src: 'baidu-map-windNew.js',
    name: 'Windy',
    build: false
}, {
    src: 'google-map-flashMarker.js',
    name: 'FlashMarker',
    build: false
}, {
    src: 'openlayers-line.js',
    name: 'MoveLine',
    build: false
}, {
    src: 'arcgis-map-moveLine.js',
    name: 'MoveLine',
    build: false
}, {
    src: 'arcgis-map-river.js',
    name: 'MoveLine',
    build: false
}, {
    src: 'arcgis-map-moveRiver.js',
    name: 'MoveRiver',
    build: false
}, {
    src: 'arcgis-map-riverwind.js',
    name: 'Windy',
    build: false
}, {
    src: 'arcgis-map-branchRiver.js',
    name: 'BranchRiver',
    build: false
}, {
    src: 'baidu-map-lineGradient.js',
    name: 'LineGradient',
    build: false
}, {
    src: 'arcgis-map-lineGradient.js',
    name: 'LineGradient',
    build: false
}, {
    src: 'arcgis-map-temperature.js',
    name: 'Temperature',
    build: false
}, {
    src: 'amap-flashMarker.js',
    name: 'FlashMarker',
    build: true
}, {
    src: 'arcgis-map-lidar.js',
    name: 'Lidar',
    build: false
}, {
    src: 'arcgis-map-ring.js',
    name: 'Ring',
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