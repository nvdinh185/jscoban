// Viết chương trình nhập chiều dài a, chiều rộng b của hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật đó.

var chieuDai = prompt("Nhập chiều dài: ");
var chieuRong = prompt("Nhập chiều rộng: ");

var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;// chuyển từ kiểu string sang kiểu dữ liệu number
var dienTich = chieuDai * chieuRong;

console.log("Chu vi: " + chuVi);
console.log("Dien tich: " + dienTich);
