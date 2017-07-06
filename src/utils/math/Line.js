/**
 * 获取两点间距离
 * @param {any} p1 起点
 * @param {any} p2 终点
 */
function getDistanceBy(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0]) + Math.pow(p1[1] - p2[1]));
}

export default {
    getDistance: getDistanceBy
}