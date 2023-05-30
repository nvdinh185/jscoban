// Chương trình nhập 1 số dương, nếu nhập đúng thì in số đó ra, nếu không thì nhập lại cho đến khi nhập đúng

// Cách 1:
var check = true;

do {

    var n = prompt('Nhập 1 số (c1): ');

    if (n > 0) {
        check = false;
        console.log('Số vừa nhập là: ' + n);
    }

} while (check);

// Cách 2:

do {
    var n = prompt('Nhập 1 số (c2): ');

    if (n > 0) {
        console.log('Số vừa nhập là: ' + n);
        break;
    }
} while (true);

// Cách 3:

do {
    var n = prompt('Nhập 1 số (c3): ');

    if (n > 0) {
        console.log('Số vừa nhập là: ' + n);
    }
} while (n < 0);