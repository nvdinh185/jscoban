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

// Hàm đảo mảng
function daoMang(array) {
    var size = array.length;
    for (var i = 0; i < size / 2; i++) {
        // hoán đổi phần tử
        var temp = array[i];
        array[i] = array[size - 1 - i];
        array[size - 1 - i] = temp;
    }
}

// Hàm sắp xếp mảng tăng dần
function bubbleSort(array) {
    var size = array.length;
    var haveSwap;
    for (var i = 0; i < size - 1; i++) {
        haveSwap = 0;
        for (var j = 0; j < size - i - 1; j++) {
            if (Number(array[j]) > Number(array[j + 1])) {
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

const menu = ` -- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. Đảo mảng
4. Sắp xếp mảng
5. Thoát

Chọn thao tác thực hiện:
`;

var arNum = [];

do {
    var input = prompt(menu);
    if (input === '1') {
        var number = prompt('Nhập số phần tử của mảng: ');
        nhapMang(arNum, number);
    } else if (input === '2') {
        xuatMang(arNum);
    } else if (input === '3') {
        daoMang(arNum);
        xuatMang(arNum);
    } else if (input === '4') {
        bubbleSort(arNum);
        xuatMang(arNum);
    } else {
        break;
    }
} while (true);