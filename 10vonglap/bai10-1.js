// 

var menu = `
        == Chọn chức năng ==
    1. Chức năng 1
    2. Chức năng 2
    3. Chức năng 3
    4. Thoát
`;

// Cách 1:
// var check = true;

// do {

//     var n = prompt(menu);

//     if (n == 1) {
//         console.log('Bạn đã chọn chức năng (c1) ' + n);
//     } else if (n == 2) {
//         console.log('Bạn đã chọn chức năng (c1) ' + n);
//     } else if (n == 3) {
//         console.log('Bạn đã chọn chức năng (c1) ' + n);
//     } else if (n == 4) {
//         check = false;
//         console.log('Bạn đã chọn thoát');
//     } else {
//         console.log('Vui lòng chọn đúng chức năng');
//     }

// } while (check);

// Cách 2:

// do {
//     var n = prompt(menu);

//     if (n == 1) {
//         console.log('Bạn đã chọn chức năng (c2) ' + n);
//     } else if (n == 2) {
//         console.log('Bạn đã chọn chức năng (c2) ' + n);
//     } else if (n == 3) {
//         console.log('Bạn đã chọn chức năng (c2) ' + n);
//     } else if (n == 4) {
//         console.log('Bạn đã chọn thoát');
//         break;
//     } else {
//         console.log('Vui lòng chọn đúng chức năng');
//     }
// } while (true);

// Cách 3:

do {
    var n = prompt(menu);

    if (n == 1) {
        console.log('Bạn đã chọn chức năng (c3) ' + n);
    } else if (n == 2) {
        console.log('Bạn đã chọn chức năng (c3) ' + n);
    } else if (n == 3) {
        console.log('Bạn đã chọn chức năng (c3) ' + n);
    } else if (n == 4) {
        console.log('Bạn đã chọn thoát');
    } else {
        console.log('Vui lòng chọn đúng chức năng');
    }

} while (n != 4);