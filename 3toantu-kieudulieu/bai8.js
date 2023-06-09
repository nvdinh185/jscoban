var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");

if (a == 0 && b == 0) {
    console.log("Phương trình vô số nghiệm!");
} else if (a == 0 && b != 0) {
    console.log("Phương trình vô nghiệm!");
} else {
    console.log("Phuong trinh co nghiem: " + (-b / a).toFixed(2));
}