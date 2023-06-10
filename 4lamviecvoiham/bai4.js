// Hàm in dãy số đã nhập
function writeLog() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
writeLog(1, 2, 3, 4, 5);

// Hàm tính tổng của dãy số
function sumArray() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumArray(1, 2, 3, 4, 5, 6));

// Hàm tìm số lớn nhất
function findMax() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));

// Hàm tìm số nhỏ nhất
function findMin() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(findMin(100, 123, 500, 115, 44, 88));