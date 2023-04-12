// Chương trình nhập 1 số dương, nếu nhập đúng thì in số đó ra, nếu không thì nhập lại cho đến khi nhập đúng

var isSuccess = false;

do {

    var n = prompt('Nhập 1 số: ');

    if (n > 0) {
        isSuccess = true;
        console.log('Số vừa nhập là: ' + n);
    }

} while (!isSuccess);