// Hàm kiểm tra số nguyên tố
function soNguyenTo(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Hàm kiểm tra số hoàn hảo
function soHoanHao(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) return true;
    return false;
}

// Hàm kiểm tra số Fibonacci
function soFibonacci(n) {
    var t1 = 1, t2 = 1, next;
    while (t1 < n) {
        next = t1 + t2;
        t1 = t2;
        t2 = next;
    }
    if (t1 === n) return true;
    return false;
}

// Hàm kiểm tra số đối xứng
function soDoiXung(n) {
    var soGoc = n, soDao = 0, donVi;

    while (n > 0) {
        donVi = n % 10;
        soDao = soDao * 10 + donVi;
        n = Math.floor(n / 10);
    }
    if (soGoc === soDao) return true;
    return false;
}

// console.log(soNguyenTo(13));
// console.log(soHoanHao(28));
// console.log(soFibonacci(21));

console.log(soDoiXung(234565432));