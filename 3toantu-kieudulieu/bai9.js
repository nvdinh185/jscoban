var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
var c = prompt("Nhập hệ số c: ");

// Chuyển sang kiểu dữ liệu số
a = Number(a);
b = Number(b);
c = Number(c);
if (a === 0) {
    if (b === 0 && c === 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (b === 0 && c !== 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem: " + (-c / b).toFixed(2));
    }
} else {
    var delta = Math.pow(b, 2) - (4 * a * c);
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    } else if (delta === 0) {
        console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a)).toFixed(2));
    } else {
        var x1 = (-b - Math.sqrt(delta)) / (2 * a);
        var x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2));
    }
}