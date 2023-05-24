function giaiPTB1(a, b) {
    if (a === 0 && b === 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (a === 0 && b !== 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem x = " + (-b / a));
    }
}

function giaiPTB2(a, b, c) {
    if (a === 0) {
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
        var a = prompt("Nhập hệ số a: ");
        var b = prompt("Nhập hệ số b: ");
        // Chuyển sang kiểu dữ liệu số
        a = Number(a);
        b = Number(b);
        giaiPTB1(a, b);
    } else if (input === '2') {
        var a = prompt("Nhập hệ số a: ");
        var b = prompt("Nhập hệ số b: ");
        var c = prompt("Nhập hệ số c: ");
        // Chuyển sang kiểu dữ liệu số
        a = Number(a);
        b = Number(b);
        c = Number(c);
        giaiPTB2(a, b, c);
    } else {
        console.log('Good Bye!');
        break;
    }
} while (true);
