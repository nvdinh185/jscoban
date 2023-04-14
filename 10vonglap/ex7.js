// Tính tổng các số từ 1 đến max, sử dụng 3 cách với 3 loại vòng lặp

var max = 10;

// Dùng vòng lặp for
var sum1 = 0;
for (var i = 1; i <= max; i++) {
    sum1 += i;
}
console.log(sum1);

// Dùng vòng lặp while
var sum2 = 0;
var i = 1;
while (i <= max) {
    sum2 += i;
    i++;
}
console.log(sum2);

// Dùng vòng lặp do..while
var sum3 = 0;
var i = 1;
do {
    sum3 += i;
    i++;
} while (i <= max);
console.log(sum3);