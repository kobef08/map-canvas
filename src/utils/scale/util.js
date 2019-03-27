var each = {
    /**
     * 按照X方向处理图像数据
     * @param  {Array}    data    图像数据
     * @param  {Number}   width   图像宽
     * @param  {Number}   startX  起始点X坐标
     * @param  {Number}   startY  起始点Y坐标
     * @param  {Number}   endX    结束点X坐标
     * @param  {Number}   endY    结束点Y坐标
     * @param  {Function} handler 处理函数
     *                            handler(index, x, y)
     *                            index为当前点在一维数组中的真实位置
     *                            x为模拟的二维数组中x坐标
     *                            y为模拟的二维数组中y坐标
     * @return {Undefined}        没有返回值
     */
    xDirection: function (data, width, startX, startY, endX, endY, handler) {
        for (var y = startY; y < endY; y++) {
            for (var x = startX; x < endX; x++) {
                handler((y * width + x) << 2, x, y);
            };
        }
    },
    yDirection: function (data, width, startX, startY, endX, endY, handler) {
        for (var x = startX; x < endX; x++) {
            for (var y = startY; y < endY; y++) {
                handler((y * width + x) << 2, x, y);
            };
        }
    }
};

export default each;