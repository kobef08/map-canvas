import tool from '../utils/tool';
import {
    default as resolutionScale
} from '../canvas/resolutionScale';

var Lidar = function (map, userOptions) {
    this.map = map;
    this.lines = [];
    this.pixelList = [];

    //默认参数
    var options = {
        //线条宽度
        lineWidth: 1,
    };

    this.init(userOptions, options);

    //全局变量
    this.baseCtx = this.options.baseCanvas.getContext("2d");
    this.width = map.width;
    this.height = map.height;

    // this.clickEvent = this.clickEvent.bind(this);

    this.bindEvent();
};

Lidar.prototype.init = function (settings, defaults) {
    //合并参数
    tool.merge(settings, defaults);
    this.options = defaults;
};

Lidar.prototype.adjustSize = function () {
    var width = this.width;
    var height = this.height;
    this.baseCtx.canvas.width = width;
    this.baseCtx.canvas.height = height;
    this.baseCtx.clearRect(0, 0, width, height);
    resolutionScale(this.baseCtx);
};

Lidar.prototype.bindEvent = function (e) {
    var map = this.map;
    if (this.options.methods) {
        if (this.options.methods.mousemove) {
            map.on('mouse-move', this.clickEvent);
        }
    }
};

Lidar.prototype.start = function () {
    var self = this,
        dataset = self.options.data,
        options = this.options,
        Point = options.Point,
        loadingMsg = document.getElementById('loadingMsg');
    self.adjustSize();

    var center = map.toScreen(new Point({
        x: self.options.center[0],
        y: self.options.center[1],
        spatialReference: {
            wkid: 4326
        }
    }));

    var ciclePoint = map.toScreen(new Point({
        x: self.options.center[2],
        y: self.options.center[3],
        spatialReference: {
            wkid: 4326
        }
    }));

    var radius = Math.sqrt(Math.pow(ciclePoint.x - center.x, 2) + Math.pow(ciclePoint.y - center.y, 2));

    //画激光雷达图
    var baseCtx = this.baseCtx;
    baseCtx.clearRect(0, 0, baseCtx.canvas.width, baseCtx.canvas.height);
    //绘制雷达扇形
    //设置渐变
    var legend = new Legend();
    var index = 0;

    function batchCompute(index, dataset) {
        const element = dataset[index];
        let grd = baseCtx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
        for (let i = 0, dataLength = element.length - 1700; i < dataLength; i++) {
            let value = element[i];
            // let index = Math.floor(value * 256);
            let index = value / 1000;
            let rgb = legend.getColor(index).rgb;
            let color = 'rgba(' + rgb[0] + ', ' + rgb[1] + ',' + rgb[2] + ',.7)';
            // let color = 'rgba(' + imageData[index * 4] + ',' + imageData[index * 4 + 1] + ',' + imageData[index * 4 + 2] + ',' + (0.6 + value) + ')';
            // console.log(index + '：' + color);
            grd.addColorStop(i / dataLength, color);
        }
        baseCtx.save();
        //绘制扇形
        baseCtx.beginPath();
        baseCtx.moveTo(center.x, center.y);
        let startAngle = index * 2;
        let stopAngle = index * 2 + 2;

        baseCtx.arc(center.x, center.y, radius, startAngle * Math.PI / 180, stopAngle * Math.PI / 180);
        baseCtx.closePath();
        baseCtx.fillStyle = grd;
        baseCtx.fill();
        baseCtx.restore();
    }

    (function batchInterpolate() {
        var start = Date.now();
        while (index < dataset.length) {
            batchCompute(index, dataset);
            index += 1;
            if (Date.now() - start > 100) {
                setTimeout(batchInterpolate, 25);
                return;
            }
            loadingMsg.innerText = '渲染进度：' + ((index / dataset.length) * 100).toFixed(1) + '%';
        }
    })();
};

function Legend() {
    this.options = {
        width: 256,
        height: 15,
        range: [0, 10],
        // gradient:{
        //     0: '#000000',
        //     0.1: '#31167e',
        //     0.2: '#0006ff',
        //     0.3: '#008b15',
        //     0.4: '#5eaf1e',
        //     0.6: '#ffa000',
        //     0.8: '#ed0808',
        //     1.0: '#8e0505'
        // }
        gradient: {
            0.1: '#96f3ff',
            0.2: '#00c3ff',
            0.3: '#00e68c',
            0.4: '#00e600',
            0.5: '#fffa00',
            0.6: '#ffbe00',
            0.7: '#ff7300',
            0.8: '#fa1400',
            0.9: '#c80091',
            1.0: '#8200a0',
        }
        // gradient: {
        //     0.1: '#38a702',
        //     0.3: '#b0e000',
        //     0.6: '#ffaa01',
        //     1.0: '#fe0000'
        // }
    };
    this.init();
}

Legend.prototype.init = function () {
    var options = this.options,
        canvas = this.canvas = document.createElement('canvas'),
        width = canvas.width = options.width,
        height = canvas.height = options.height,
        context = canvas.getContext('2d'),

        grad = context.createLinearGradient(0, 0, width, height);
    for (var gradient in options.gradient) {
        grad.addColorStop(gradient, options.gradient[gradient]);
    }
    context.fillStyle = grad;
    context.fillRect(0, 0, width, height);
    this.imageData = context.getImageData(0, 0, width, height);
};

Legend.prototype.d2Hex = function (d) {
    var hex = Number(d).toString(16);
    while (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex.toUpperCase();
};

Legend.prototype.getRgbColor = function (point) {
    var imageData = this.imageData;
    var data = imageData.data;
    var i = ((point.y * this.canvas.width) + point.x) * 4;
    var rgb = [],
        color = '#',
        objRgbColor = {
            "rgb": rgb,
            "color": color
        };
    for (var j = 0; j < 3; j++) {
        rgb.push(data[i + j]);
        color += this.d2Hex(data[i + j]);
    }
    objRgbColor.color = color;
    return objRgbColor;
};

Legend.prototype.getColor = function (value) {
    var options = this.options,
        range = options.range,
        colorValue = value - range[0],
        point = {
            x: Math.round((colorValue * this.canvas.width) / (range[range.length - 1] - range[0])),
            y: 1
        };
    return this.getRgbColor(point);
};

export default Lidar;