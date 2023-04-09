// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 1; i <= n; i++) {
        var n = prompt('Nhập phần tử thứ ' + i);
        array.push(n);
    }
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    for (var el of array) {
        console.log(el);
    }
}

// Hàm tìm số lớn nhất trong mảng
function timMax(array) {
    var max = array[0];
    for (var el of array) {
        if (el > max) {
            max = el;
        }
    }
    return max;
}

// Hàm tìm số nhỏ nhất trong mảng
function timMin(array) {
    var min = array[0];
    for (var el of array) {
        if (el < min) {
            min = el;
        }
    }
    return min;
}

// Hàm tính tổng các phần tử trong mảng
function sumArray(array) {
    var sum = 0;
    for (var el of array) {
        sum += Number(el);
    }
    return sum;
}

var arNum = [];
nhapMang(arNum, 5);
xuatMang(arNum);
console.log('Số lớn nhất: ' + timMax(arNum));
console.log('Số nhỏ nhất: ' + timMin(arNum));
console.log('Tổng các phần tử trong mảng: ' + sumArray(arNum));