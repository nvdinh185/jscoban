var canhTren = prompt("Nhập chiều dài đáy trên: ");
var canhDuoi = prompt("Nhập chiều dài đáy dưới: ");
var chieuCao = prompt("Nhập chiều cao: ");

var dienTich = (Number(canhTren) + Number(canhDuoi)) * chieuCao / 2;

console.log("Dien tich: " + dienTich);
