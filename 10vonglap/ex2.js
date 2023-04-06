// Viết chương trình nhập 2 số a, b (a < b). In ra các số là ước của 12 trong khoảng a, b

var a = prompt('Nhập a = ');
var b = prompt('Nhập b = ');
a = Number(a);
b = Number(b);
for (var i = a; i <= b; i++) {
    if (12 % i === 0) {
        console.log(i);
    }
}