// Array.prototype.test = function (b) {
//     console.log(b);
//     return this;
// }

// var arrayNumber = [1, 2, 3, 4, 5];

// var totals = arrayNumber.test(function () {

// });

// console.log(totals);

function arrToObj1(arr) {
    return arr.reduce((bienTichLuy, giaTriHienTai) => {
        return { ...bienTichLuy, [giaTriHienTai[0]]: giaTriHienTai[1] };
    }, {});
}

// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }