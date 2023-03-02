var number = prompt('Nhập 1 số: ');

var t1 = 1, t2 = 1, next;
while (t1 < number) {
    next = t1 + t2;
    t1 = t2;
    t2 = next;
}
if (t1 === Number(number)) {
    console.log(number + ' là số fibonacci!');
} else {
    console.log(number + ' không phải là số fibonacci!');
}