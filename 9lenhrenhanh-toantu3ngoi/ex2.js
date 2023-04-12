// Chương trình nhập vào 1 tháng trong năm, in ra số ngày trong tháng đó

var thang = prompt('Nhập 1 tháng trong năm: ');

switch (thang) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12': console.log('Tháng này có 31 ngày!!');
        break;
    case '4':
    case '6':
    case '9':
    case '10':
    case '12': console.log('Tháng này có 30 ngày!!');
        break;
    case '2': console.log('Tháng này có 28 hoặc 29 ngày!!');
        break;
}