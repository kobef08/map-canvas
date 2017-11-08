import CanvasLayer from '../map/baidu-map/CanvasLayer';
import {requestAnimationFrame,cancelAnimationFrame} from '../animation/requestAnimationFrame';

function Typhoon(obj) {
    this.id = obj.id; //台风编号
    this.lon = obj.lon;
    this.lat = obj.lat;
    this.pubTime = obj.pubTime; //发布时间
    this.airPress = obj.airPress; //气压
    this.speed = obj.speed; //最大风速
    this.radius6 = obj.radius6; //六级半径
    this.radius7 = obj.radius7; //七级半径
    this.radius8 = obj.radius8; //八级半径
    this.radius10 = obj.radius10; //十级半径
    this.radius12 = obj.radius12; //十二级半径
    this.level = obj.level; //等级（热带风暴）
    this.power = obj.power; //风力（10级）
    this.color = obj.color;
}

//各级风力半径
Typhoon.prototype.getRadiusList = function (zoom) {
    var radiusList = [];
    var pixel = Math.pow(2, 18 - zoom); //该级别1px代表的距离
    if (this.radius6 != '') {
        radiusList.push(Number(this.radius6) * 1000 / pixel);
    }
    if (this.radius7 != '') {
        radiusList.push(Number(this.radius7) * 1000 / pixel);
    }
    if (this.radius8 != '') {
        radiusList.push(Number(this.radius8) * 1000 / pixel);
    }
    if (this.radius10 != '') {
        radiusList.push(Number(this.radius10) * 1000 / pixel);
    }
    if (this.radius12 != '') {
        radiusList.push(Number(this.radius12) * 1000 / pixel);
    }
    return radiusList;
};

Typhoon.prototype.drawSymbol = function (context, x, y) {
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = '#555';
    context.lineWidth = .3;
    context.arc(x, y, 4, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.closePath();
};

Typhoon.prototype.drawLine = function (context, x1, y1, x2, y2) {
    context.lineWidth = 2;
    context.strokeStyle = '#0076c9';
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
};

Typhoon.prototype.drawCircle = function (context, x, y, r, i) {
    context.beginPath();
    context.fillStyle = 'rgba(255,172,5,' + 0.3 + 0.15 * i + ')';
    context.strokeStyle = 'rgba(255,172,5,.8)';
    context.lineWidth = 1;
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.closePath();
};

Typhoon.prototype.drawImage = function (context, img, x, y) {
    img.addEventListener("load", function () {
        context.drawImage(img, x - 15, y - 15, 30, 30);
    });
    if (img.complete) {
        context.drawImage(img, x - 15, y - 15, 30, 30);
    }
};

