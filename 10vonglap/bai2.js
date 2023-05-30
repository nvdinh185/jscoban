// Viết chương trình tính tổng các số chẵn từ 1 đến 10

var sum = 0;
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}

console.log('Tổng các số từ 1 đến 10 là: ' + sum);