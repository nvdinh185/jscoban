var number = prompt('Nhập 1 số: ');

var sum = 0;
for (var i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
}

if (sum === Number(number)) {
    console.log(number + ' là số hoàn hảo!');
} else {
    console.log(number + ' không phải là số hoàn hảo!');
}