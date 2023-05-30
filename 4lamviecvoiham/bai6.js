// Hàm kiểm tra số hoàn hảo
function soHoanHao(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) return true;
    return false;
}

var number = prompt('Nhập số muốn kiểm tra: ');
number = Number(number);
if (soHoanHao(number)) {
    console.log('Số đã nhập là số hoàn hảo!');
} else {
    console.log('Không phải là số hoàn hảo!');
}