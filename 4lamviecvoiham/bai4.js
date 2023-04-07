// Hàm in dãy số đã nhập
function writeLog() {
    for (var n of arguments) {
        console.log(n);
    }
}
writeLog(1, 2, 3, 4, 5);

// Hàm tính tổng của dãy số
function sumArray() {
    var sum = 0;
    for (var n of arguments) {
        sum += n;
    }
    return sum;
}
console.log(sumArray(1, 2, 3, 4, 5, 6));

// Hàm tìm số lớn nhất
function findMax() {
    var max = arguments[0];
    for (var n of arguments) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));

// Hàm tìm số nhỏ nhất
function findMin() {
    var min = arguments[0];
    for (var n of arguments) {
        if (n < min) {
            min = n;
        }
    }
    return min;
}

console.log(findMin(100, 123, 500, 115, 44, 88));