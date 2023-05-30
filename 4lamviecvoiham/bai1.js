// Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).

function giaiPTB1(a, b) {
    if (a == 0 && b == 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem x = " + (-b / a));
    }
}

var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");

giaiPTB1(a, b);