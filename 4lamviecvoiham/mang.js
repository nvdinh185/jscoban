
function myFunc() {
    var ar = [...arguments];
    ar.push(10);
    for (var i = 0; i < ar.length; i++) {
        console.log(ar[i]);
    }
}

function myFunc2(a) {
    console.log(a);
    console.log(arguments);
}

// Hàm đảo mảng
function daoMang() {
    var size = arguments.length;
    for (var i = 0; i < size / 2; i++) {
        // hoán đổi phần tử
        var temp = arguments[i];
        arguments[i] = arguments[size - 1 - i];
        arguments[size - 1 - i] = temp;
    }
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

myFunc2(1, 2, 3);
myFunc(2, 3, 4, 5, 6, 7, 8, 9);
daoMang(2, 3, 4, 5, 6, 7, 8, 9);