const menu = ` --  CHỌN CHỨC NĂNG --
1. In dãy số đã nhập
2. Tính tổng của dãy số
3. Tìm số lớn nhất
4. Tìm số nhỏ nhất
5. Thoát
`;
var check = true;

do {
    var input = prompt(menu + " Chọn thao tác thực hiện:");

    switch (input) {
        case '1':
            writeLog(1, 2, 3, 4, 5);
            break;
        case '2':
            console.log(sumArray(1, 2, 3, 4, 5, 6));
            break;
        case '3':
            console.log(findMax(1, 123, 500, 115, 44, 88));
            break;
        case '4':
            console.log(findMin(100, 123, 500, 115, 44, 88));
            break;
        default:
            console.log("Good Bye!");
            check = false;
            break;
    }
} while (check);

// Hàm in dãy số đã nhập
function writeLog() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// Hàm tính tổng của dãy số
function sumArray() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Hàm tìm số lớn nhất
function findMax() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// Hàm tìm số nhỏ nhất
function findMin() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}