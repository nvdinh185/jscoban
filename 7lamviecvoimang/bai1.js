// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 0; i < n; i++) {
        var el = prompt(`Nhập array[${i}]: `);
        array.push(el);
    }
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

var arNum = [];
var n = prompt('Nhập số phần tử của mảng: ');
nhapMang(arNum, n);
xuatMang(arNum);