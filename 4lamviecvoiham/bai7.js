// Hàm kiểm tra số nguyên tố
function soNguyenTo(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Hàm in các số nguyên tố trong dãy số
function inCacSoNT() {
    for (var i = 0; i < arguments.length; i++) {
        if (soNguyenTo(arguments[i])) {
            console.log(arguments[i]);
        }
    }
}

inCacSoNT(2, 3, 4, 5, 6, 7, 8, 9); //=> output: 2, 3, 5, 7