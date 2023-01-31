function writeLog() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function sumArray() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function findMax() {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function findMin() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

writeLog(1, 2, 3, 4, 5);
console.log(sumArray(1, 2, 3, 4, 5, 6));
console.log(findMax(1, 123, 500, 115, 44, 88));
console.log(findMin(100, 123, 500, 115, 44, 88));