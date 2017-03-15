(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/**
 * @author https://github.com/chengquan223
 * @Date 2016-12-15
 * 1.计算矩形4个角的canvas坐标x、y，初始化该区域所有网格点，间距可根据map index设置
 * 2.将已有的站点经纬度转换为canvas坐标
 * 3.插值法计算出每个网格点的风向、风速
 * 4.在该网格区域随机生成width*8个点，重复运动
 */

window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 20);
    };
}();

})));
