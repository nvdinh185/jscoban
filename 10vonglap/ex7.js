var max = 10;

var sum1 = 0;
for (var i = 1; i <= max; i++) {
    sum1 += i;
}
console.log(sum1);

var sum2 = 0;
var i = 1;
while (i <= max) {
    sum2 += i;
    i++;
}
console.log(sum2);

var sum3 = 0;
var i = 1;
do {
    sum3 += i;
    i++;
} while (i <= max);
console.log(sum3);