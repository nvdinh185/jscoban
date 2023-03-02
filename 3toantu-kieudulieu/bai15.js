var number = prompt('Nhập 1 số: ');

var soGoc = Number(number), soDao = 0, donVi;

while (number > 0) {
    donVi = number % 10;
    soDao = soDao * 10 + donVi;
    number = Math.floor(number / 10);
}
if (soGoc === soDao) {
    console.log(soGoc + ' là số đối xứng!');
} else {
    console.log(soGoc + ' không phải là số đối xứng!');
}