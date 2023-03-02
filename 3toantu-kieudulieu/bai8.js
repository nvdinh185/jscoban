var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
if (a === '' || b === '' || a === null || b === null) {
    alert('Vui long nhap!');
} else if (isNaN(a) || isNaN(b)) {
    alert("Nhập hệ số không đúng định dạng số!");
} else {
    // Chuyển sang kiểu dữ liệu số
    a = Number(a);
    b = Number(b);
    if (a === 0 && b === 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (a === 0 && b !== 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem: " + (-b / a).toFixed(2));
    }
}