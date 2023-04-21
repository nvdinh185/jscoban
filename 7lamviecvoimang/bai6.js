// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Hàm tạo mảng gồm 10 phần tử là các số ngẫu nhiên từ 0 đến 100
function taoMang(array) {
    for (var i = 1; i <= 10; i++) {
        var el = getRandomInt(100);
        array.push(el);
    }
    alert('Tạo mảng thành công!');
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    console.log('== XUẤT MẢNG ==');
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
    alert('Đảo mảng thành công!');
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
    alert('Sắp xếp mảng thành công!');
}

// Hàm nhập 1 số bất kỳ rồi tìm số đó trong mảng
function timkiem(array) {

    var input = prompt('Nhập số muốn tìm: ');

    // var idx = searchIndex(Number(input), array);
    var idx = array.indexOf(Number(input));
    if (idx !== -1) {
        console.log("Vị trí tìm thấy số " + input + " là: " + idx);
    } else {
        console.log('Không tìm thấy!');
    }
}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
    return -1;
}

const menu = ` -- CHỌN CHỨC NĂNG --
1. Tạo mảng
2. Xuất mảng
3. Đảo mảng
4. Sắp xếp mảng
5. Tìm 1 số
6. Thoát

Chọn thao tác thực hiện:
`;

var arNum = [];

do {
    var input = prompt(menu);
    if (input === '1') {
        taoMang(arNum);
    } else if (input === '2') {
        xuatMang(arNum);
    } else if (input === '3') {
        daoMang(arNum);
    } else if (input === '4') {
        bubbleSort(arNum);
    } else if (input === '5') {
        timkiem(arNum);
    } else {
        break;
    }
} while (true);