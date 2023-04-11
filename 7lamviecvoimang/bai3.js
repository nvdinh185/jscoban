// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
    var soGoc, soDao = 0, donVi;
    soGoc = n;
    while (n > 0) {
        donVi = n % 10;
        soDao = soDao * 10 + donVi;
        n = Math.floor(n / 10);
    }
    if (soGoc === soDao) return true;
    return false;
}

// Hàm đếm số lầm xuất hiện một số trong mảng
function count(number, array) {
    var count = 0;
    for (var n of array) {
        if (n === number) count++;
    }
    return count;
}

// Hàm đếm số nguyên tố trong mảng
function countSNT(array) {
    var count = 0;
    for (var n of array) {
        if (soNguyenTo(n)) count++;
    }
    return count;
}

// Hàm đếm số hoàn hảo trong mảng
function countSHH(array) {
    var count = 0;
    for (var n of array) {
        if (soHoanHao(n)) count++;
    }
    return count;
}

// Hàm đếm số fibonacci trong mảng
function countSFb(array) {
    var count = 0;
    for (var n of array) {
        if (soFibonacci(n)) count++;
    }
    return count;
}

// Hàm đếm số đối xứng trong mảng
function countSDX(array) {
    var count = 0;
    for (var n of array) {
        if (soDoiXung(n)) count++;
    }
    return count;
}

// Hàm sắp xếp tăng dần
function bubbleSort(array) {
    var size = array.length;
    var haveSwap;
    for (var i = 0; i < size - 1; i++) {
        haveSwap = 0;
        for (var j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                haveSwap++;
            }
        }
        // console.log('haveSwap ', haveSwap);
        if (haveSwap === 0) {
            break;
        }
    }
}

var arrayNumber = [];

const menu = ` -- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. Đếm số 0
4. Đếm số nguyên tố
5. Đếm số hoàn hảo
6. Thoát

Chọn thao tác thực hiện:
`;


do {
    var input = prompt(menu);
    if (input === '1') {
        for (var i = 0; i < 100; i++) {
            arrayNumber.push(getRandomInt(100));
        }
        bubbleSort(arrayNumber);
    } else if (input === '2') {
        console.log(arrayNumber);
    } else if (input === '3') {
        console.log(count(0, arrayNumber));
    } else if (input === '4') {
        console.log(countSNT(arrayNumber));
    } else if (input === '5') {
        console.log(countSHH(arrayNumber));
    } else {
        break;
    }
} while (true);