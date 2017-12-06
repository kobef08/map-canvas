OpenLayers.Layer.CanvasLayer = OpenLayers.Class(OpenLayers.Layer, {
    points: null,
    canvas: null,
    initialize: function (name, options) {
        OpenLayers.Layer.prototype.initialize.apply(this, arguments);
        this.points = [];

        var canvas = this.canvas = document.createElement('canvas');
        var ctx = this.ctx = this.canvas.getContext('2d');
        canvas.style.cssText = 'position:absolute;' +
            'left:0;' +
            'top:0;' +
            'z-index:0;';

        // For some reason OpenLayers.Layer.setOpacity assumes there is
        // an additional div between the layer's div and its contents.
        var sub = document.createElement('div');
        sub.appendChild(this.canvas);
        this.div.appendChild(sub);
    },
    moveTo: function (bounds, zoomChanged, dragging) {
        console.log(this);
        OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
        if (dragging)
            return;
        //偏移
        var someLoc = new OpenLayers.LonLat(0, 0);
        var offsetX = this.map.getViewPortPxFromLonLat(someLoc).x -
            this.map.getLayerPxFromLonLat(someLoc).x;
        var offsetY = this.map.getViewPortPxFromLonLat(someLoc).y -
            this.map.getLayerPxFromLonLat(someLoc).y;
        var w = this.map.getSize().w;
        var h = this.map.getSize().h;
        this.canvas.width = w;
        this.canvas.height = h;
        var ctx = this.canvas.getContext('2d');
        ctx.save(); // Workaround for a bug in Google Chrome
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, w, h);
        ctx.restore();

        //得出当前画布的左上右下经纬度数据 对于超过这个界限的数据 当前画布忽略绘制
        var left = new OpenLayers.Pixel(0, 0);
        var right = new OpenLayers.Pixel(w, h);

        var leftlonlat = this.map.getLonLatFromPixel(left);
        var rightlonlat = this.map.getLonLatFromPixel(right);

        for (var i in this.points) {
            var src = this.points[i];
            //判断数据是否已经超越当前canvas 如果超越 直接跳过
            if (src.r.lon < leftlonlat.lon || src.r.lat > leftlonlat.lat ||
                src.l.lon > rightlonlat.lon || src.l < rightlonlat.lat) {
                continue;
            }
            //坐标
            var leftpos = this.map.getLayerPxFromLonLat(src.l);
            var rightpos = this.map.getLayerPxFromLonLat(src.r);
            if (leftpos == null || rightpos == null) continue;
            var minlon = leftpos.x;
            var maxlat = leftpos.y;
            var maxlon = rightpos.x;
            var minlat = rightpos.y;
            var x = maxlon - minlon;
            var y = minlat - maxlat;
            //颜色
            //判断是否为shuzi  
            ctx.fillStyle = src.c;
            ctx.fillRect(minlon + offsetX, maxlat + offsetY, x, y);
            ctx.fillStyle = 'transparent';
            //判断是否有边框颜色,如果有则绘制边框
            if (src.bc) {
                //border
                ctx.strokeStyle = src.bc;
                ctx.strokeRect(minlon + offsetX, maxlat + offsetY, x, y);
                ctx.strokeStyle = 'transparent';
            }
        }
        var dat = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        ctx.putImageData(dat, 0, 0);
        this.canvas.style.left = (-offsetX) + 'px';
        this.canvas.style.top = (-offsetY) + 'px';
    },
    CLASS_NAME: 'OpenLayers.Layer.CanvasLayer'
});