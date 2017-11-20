import util from '../core/util';
import CanvasLayer from '../map/baidu-map/CanvasLayer';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../animation/requestAnimationFrame';

var Typhoon = function (map, userOptions) {
    var self = this;

    //默认参数
    var options = {
        //marker点半径
        markerRadius: 4,
        //marker点颜色,为空或null则默认取线条颜色
        markerColor: '#555',
        //线条宽度
        lineWidth: 1,
        //线条类型 solid、dashed、dotted
        lineType: 'solid',
        //线条颜色
        lineStyle: '#0076c9',
        //台风图片
        imgurl: 'images/typhoon.png'
    };

    //全局变量
    var baseLayer = null,
        animationLayer = null,
        width = map.getSize().width,
        height = map.getSize().height;

    //参数合并
    util.merge(options, userOptions, true);

    self.options = options;
    //初始化
    self.init = function () {
        self.setDataSet();

        baseLayer = new CanvasLayer({
            map: map,
            update: self.brush
        });
    }
    //底层canvas渲染
    self.brush = function () {
        var baseCtx = baseLayer.canvas.getContext('2d');
        if (!baseCtx) {
            return;
        }
        baseCtx.clearRect(0, 0, width, height);

    }
    //数据源转换
    self.setDataSet = function () {
        var img = this.img = new Image();
        img.src = this.imgurl;
        var dataSet = this.dataSet = [];
        var opts = self.options;
        opts.data.forEach(function (value) {
            var typhoonEye = new TyphoonEye(value);
            typhoonEye.setLevelInfo(value.tlevel, opts.splitData);
            dataSet.push(typhoonEye);
        });
    }

    function TyphoonEye(opts) {
        this.id = opts.id; //台风编号
        this.lon = opts.lon;
        this.lat = opts.lat;
        this.pubTime = opts.pubTime; //发布时间
        this.airPress = opts.airPress; //气压
        this.speed = opts.speed; //最大风速
        this.radius6 = opts.radius6; //六级半径
        this.radius7 = opts.radius7; //七级半径
        this.radius8 = opts.radius8; //八级半径
        this.radius10 = opts.radius10; //十级半径
        this.radius12 = opts.radius12; //十二级半径
    }

    TyphoonEye.prototype.setLevelInfo = function (name, splitData) {
        for (var i = 0; i < splitData.length; i++) {
            var split = splitData[i];
            if (split.name === name) {
                this.level = split.level;
                this.power = split.power;
                this.color = split.color;
                return;
            }
        }
    }

    self.init();
};

Typhoon.prototype.update = function () {

}

export default Typhoon;