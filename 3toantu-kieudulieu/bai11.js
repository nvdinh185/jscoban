var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");
var c = prompt("Nhập c: ");

var check = true;
if (a === '' || a === null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(a)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (a <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
} else {
    a = Number(a);
}

if (b === '' || b === null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(b)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (b <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
} else {
    b = Number(b);
}

if (c === '' || c === null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(c)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (c <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
} else {
    c = Number(c);
}

if (check) {
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && b === c) {
            console.log('Tam giác đều');
        } else if (a === b || b === c || a === c) {
            console.log('Tam giác cân');
        } else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
            console.log('Tam giác vuông');
        } else {
            console.log('Tam giác thường');
        }
    } else {
        console.log('Không phải tam giác!');
    }
}