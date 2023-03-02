var number = prompt('Nhập 1 số: ');

var s = 0;
for (var i = 2; i < number; i++) {
    if (number % i === 0) s += 1;
}

if (s === 0) {
    console.log(number + ' là số nguyên tố!');
} else {
    console.log(number + ' không phải là số nguyên tố!');
}