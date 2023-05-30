// Viết chương trình nhập bán kính R của hình tròn. Tính chu vi và diện tích của hình tròn đó.

var banKinh = prompt("Nhập bán kính: ");

const PI = 3.14;

var chuVi = banKinh * 2 * PI;
var dienTich = banKinh * banKinh * PI;

console.log("Chu vi: " + chuVi);
console.log("Dien tich: " + dienTich);