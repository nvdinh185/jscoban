// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 1; i <= n; i++) {
        var el = prompt('Nhập phần tử thứ ' + i);
        array.push(el);
    }
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    for (var i = 0; i < n; i++) {
        console.log(array[i]);
    }
}

var arNum = [];
nhapMang(arNum, 5);
xuatMang(arNum);