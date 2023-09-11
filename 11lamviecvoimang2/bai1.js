// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 0; i < n; i++) {
        var el = prompt('Nhập phần tử thứ ' + i);
        array.push(el);
    }
}

// Hàm kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không? (dùng every)
function checkEvery(array) {
    return array.every(function (el) {
        return el >= 5;
    });
}

// Hàm kiểm tra xem thử có phần tử nào đều lớn hơn 5 không? (dùng some)
function checkSome(array) {
    return array.some(function (el) {
        return el >= 5;
    });
}

// Hàm nhân 3 giá trị mỗi phần tử trong mảng (dùng map)
function triple(array) {
    return array.map(function (el) {
        return el *= 3;
    });
    // var newArr = [];
    // for (const el of array) {
    //     newArr.push(el * 3);
    // }
    // return newArr;
}

// tính tổng các phần tử trong mảng (dùng reduce)
function sumArray(array) {
    return array.reduce(function (total, el) {
        return total + el;
    }, 0);
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

var arNum = [];

var menu = ` == CHỌN CHỨC NĂNG ==
1. Nhập mảng các số
2. Nhân 3 giá trị mỗi phần tử
3. Xuất mảng
4. Tính tổng các phần tử trong mảng
5. Kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không?
6. Kiểm tra xem thử có phần tử nào đều lớn hơn 5 không?
7. Thoát

Nhập thao tác lựa chọn:
`
var check = true;
do {
    var input = prompt(menu);

    switch (input) {
        case '1':
            var n = prompt('Nhập số lượng phần tử: ');
            // goi hàm nhập 1 mảng
            nhapMang(arNum, n);
            break;
        case '2':
            // gọi hàm nhân 3 giá trị mỗi phần tử trong mảng
            arNum = triple(arNum);
            break;
        case '3':
            // gọi hàm xuất mảng
            xuatMang(arNum);
            break;
        case '4':
            // gọi hàm tính tổng các phần tử trong mảng
            console.log(sumArray(arNum));
            break;
        case '5':
            // gọi hàm kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không?
            console.log(checkEvery(arNum));
            break;
        case '6':
            // gọi hàm kiểm tra xem thử có phần tử nào lớn hơn 5 không?
            console.log(checkSome(arNum));
            break;
        case '7':
            check = false;
            break;
    }
} while (check);