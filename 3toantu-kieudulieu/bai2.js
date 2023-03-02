var chieuDai = prompt("Nhập chiều dài: ");
var chieuRong = prompt("Nhập chiều rộng: ");
chieuDai = Number(chieuDai);// chuyển từ string sang kiểu dữ liệu number
chieuRong = Number(chieuRong);// chuyển từ string sang kiểu dữ liệu number

var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

console.log("Chu vi: " + chuVi);
console.log("Dien tich: " + dienTich);
