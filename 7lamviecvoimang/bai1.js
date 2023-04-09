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

var arNum = [];
nhapMang(arNum, 5);
xuatMang(arNum);