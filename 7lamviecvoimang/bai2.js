// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 0; i < n; i++) {
        array.push(prompt('Nhập phần tử thứ ' + (i + 1)));
    }
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
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
// Hàm sắp xếp mảng theo thứ tự tăng dần
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

var arNum = [];
nhapMang(arNum, 5);
xuatMang(arNum);
// daoMang(arNum);
bubbleSort(arNum);
xuatMang(arNum);