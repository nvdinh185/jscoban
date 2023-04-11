var check = true;
function inputNumber(msg) {
    var number = prompt(msg);
    if (number === '' || number === null) {
        console.log("Vui lòng nhập!");
        check = false;
    } if (isNaN(number)) {
        console.log("Không đúng định dạng!");
        check = false;
    } else {
        return Number(number);
    }
}

function giaiPTB1(a, b) {
    if (!check) {
        alert("Lỗi khi nhập!");
    } if (a === 0 && b === 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (a === 0 && b !== 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem x = " + (-b / a));
    }
}

function giaiPTB2(a, b, c) {
    if (!check) {
        alert("Lỗi khi nhập!");
    } else if (a === 0) {
        giaiPTB1(b, c);
    } else {
        var delta = Math.pow(b, 2) - (4 * a * c);
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta === 0) {
            console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a)));
        } else {
            var x1 = (-b - Math.sqrt(delta)) / (2 * a);
            var x2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
        }
    }
}


const menu = ` -- GIẢI PHƯƠNG TRÌNH --
1. BẬC 1
2. BẬC 2
3. THOÁT

Chọn thao tác thực hiện:
`;

do {
    var input = prompt(menu);

    if (input === '1') {
        var a = inputNumber("Nhập hệ số a: ");
        var b = inputNumber("Nhập hệ số b: ");
        giaiPTB1(a, b);
    } else if (input === '2') {
        var a = inputNumber("Nhập hệ số a: ");
        var b = inputNumber("Nhập hệ số b: ");
        var c = inputNumber("Nhập hệ số c: ");
        giaiPTB2(a, b, c);
    } else {
        console.log('Good Bye!');
        break;
    }
} while (true);
