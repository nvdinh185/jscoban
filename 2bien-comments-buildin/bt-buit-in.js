var input = alert("Hello World!");

console.log(input); // underfined

var input = confirm("Xác nhận!");

console.log(input); // true/false

var chieuDai = prompt("Nhập chiều dài: ");

console.log(chieuDai);
console.log(typeof chieuDai);

setTimeout(function () {
    alert("123");
}, 1000);

setInterval(function () {
    alert("456");
}, 1000);