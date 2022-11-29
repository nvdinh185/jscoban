Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var arrayNumber = [1, 2, 3, 4, 5];

var totals = arrayNumber.reduce2(function (flatOutput, depthItem) {
    return flatOutput + depthItem;
});

console.log(totals);