// Chương trình nhập vào 1 tháng trong năm, in ra số ngày trong tháng đó

var thang = prompt('Nhập 1 tháng trong năm: ');

switch (thang) {
    case '1': console.log('Tháng này có 31 ngày!');
        break;
    case '2': console.log('Tháng này có 28 hoặc 29 ngày!');
        break;
    case '3': console.log('Tháng này có 31 ngày!');
        break;
    case '4': console.log('Tháng này có 30 ngày!');
        break;
    case '5': console.log('Tháng này có 31 ngày!');
        break;
    case '6': console.log('Tháng này có 30 ngày!');
        break;
    case '7': console.log('Tháng này có 31 ngày!');
        break;
    case '8': console.log('Tháng này có 31 ngày!');
        break;
    case '9': console.log('Tháng này có 30 ngày!');
        break;
    case '10': console.log('Tháng này có 31 ngày!');
        break;
    case '11': console.log('Tháng này có 30 ngày!');
        break;
    case '12': console.log('Tháng này có 31 ngày!');
        break;
}