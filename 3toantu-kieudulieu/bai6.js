// Viết chương trình nhập 2 số a, b. Tính tích, thương, số dư của 2 số a, b.

var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");

var tich = a * b;
var thuong = a / b;
var du = a % b;

console.log("Tich: " + tich);
console.log("Thương: " + thuong);
console.log("Số dư: " + du);