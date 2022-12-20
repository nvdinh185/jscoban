function arrToObj(arr) {
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