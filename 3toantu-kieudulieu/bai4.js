var canhTren = prompt("Nhập chiều dài đáy trên: ");
var canhDuoi = prompt("Nhập chiều dài đáy dưới: ");
var chieuCao = prompt("Nhập chiều cao: ");

canhTren = Number(canhTren);// chuyển từ string sang kiểu dữ liệu number
canhDuoi = Number(canhDuoi);// chuyển từ string sang kiểu dữ liệu number

var dienTich = (canhTren + canhDuoi) * chieuCao / 2;

console.log("Dien tich: " + dienTich);
