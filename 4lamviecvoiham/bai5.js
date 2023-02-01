function swap(x, y) {
    console.log('Trong ham: Truoc khi hoan doi: ', x, y);
    var t = x;
    x = y;
    y = t;
    console.log('Trong ham: Sau khi hoan doi: ', x, y);
}

var a = 1;
var b = 2;
console.log('Ngoai ham: Truoc khi hoan doi: ', a, b);
swap(a, b);
console.log('Ngoai ham: Sau khi hoan doi: ', a, b);