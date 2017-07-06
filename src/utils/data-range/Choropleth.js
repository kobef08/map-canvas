function Choropleth(splitList) {
    this.splitList = splitList || [{
        start: 0,
        value: 'red'
    }];
}

Choropleth.prototype.get = function (count) {
    var splitList = this.splitList,
        value = false;
    for (var i = 0; i < splitList.length; i++) {
        var split = splitList[i];
        if ((split.start === undefined || split.start !== undefined && count >= split.start) &&
            (split.end === undefined || split.end !== undefined && count < split.end)) {
            value = split.value;
            break;
        }
    }
    return value;
}