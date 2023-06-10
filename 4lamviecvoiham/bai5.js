// Hàm kiểm tra số nguyên tố
function soNguyenTo(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

var number = prompt('Nhập số muốn kiểm tra: ');

if (soNguyenTo(number)) {
    console.log('Số đã nhập là số nguyên tố!');
} else {
    console.log('Không phải là số nguyên tố!');
}