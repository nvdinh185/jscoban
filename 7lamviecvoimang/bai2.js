// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 1; i <= n; i++) {
        var el = prompt('Nhập phần tử thứ ' + i);
        array.push(el);
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

const menu = ` -- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. Tìm số lớn nhất
4. Tìm số nhỏ nhất
5. Tính tổng
6. Thoát

Chọn thao tác thực hiện:
`;


do {
    var input = prompt(menu);
    if (input === '1') {
        var number = prompt('Nhập số phần tử của mảng: ');
        nhapMang(arNum, number);
    } else if (input === '2') {
        xuatMang(arNum);
    } else if (input === '3') {
        console.log('Số lớn nhất: ' + timMax(arNum));
    } else if (input === '4') {
        console.log('Số nhỏ nhất: ' + timMin(arNum));
    } else if (input === '5') {
        console.log('Tổng các phần tử trong mảng: ' + sumArray(arNum));
    } else {
        break;
    }
} while (true);