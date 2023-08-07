var array = [];
var n = prompt('Nhập số phần tử của mảng: ');

// lặp để nhập từng phần tử của mảng
for (var i = 0; i < n; i++) {
    var el = prompt(`Nhập array[${i}]: `);
    array.push(el);
}

// lặp để xuất mảng ra màn hình console
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}