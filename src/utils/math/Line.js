/**
 * 获取两点间距离
 * @param {any} point1 起点
 * @param {any} point2 终点
 */
function getDistanceBy(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0]) + Math.pow(p1[1] - p2[1]));
}

export default {
    getDistance: getDistanceBy
}