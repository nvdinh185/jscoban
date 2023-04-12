const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]

const menu = `1. Nhập dữ liệu
2. Xuất dữ liệu
3. Tìm thông tin
4. Xóa thông tin đội bóng
5. Thoát

Nhập thao tác lựa chọn:`;

function generateUuid() {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

do {
    var input = prompt(menu);
    if (input == 1) {
        them();
    } else if (input == 2) {
        display();
    } else if (input == 3) {
        tim();
    } else if (input == 4) {
        xoa();
    } else {
        console.log('Goodbye!');
        break;
    }
} while (true);

// 1. Thêm đội bóng
function them() {
    var ten = prompt('Nhập tên đội bóng:');
    var huanLuyenVien = prompt('Nhập tên huấn luyện viên:');
    var soLanVoDich = prompt('Nhập số lần vô địch: ');
    var doiBongMoi = {
        id: generateUuid(),
        ten: ten,
        huanLuyenVien: huanLuyenVien,
        soLanVoDich: Number(soLanVoDich)
    }
    danhSachDoiBong.push(doiBongMoi);
}

// 2. Hiển thị thông tin đội bóng
function display() {
    console.log('THÔNG TIN ĐỘI BÓNG');
    for (const el of danhSachDoiBong) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}

// 3. Tìm đội bóng
function tim() {
    var id = prompt('Nhập id đội bóng muốn tìm: ');
    var doiBong = search(Number(id), danhSachDoiBong);
    if (doiBong) {
        console.log(doiBong);
    } else {
        console.log('Không tìm thấy!');
    }
}

// 4. Xóa đội bóng
function xoa() {
    var id = prompt('Nhập id đội bóng muốn xóa: ');
    var idx = searchIndex(Number(id), danhSachDoiBong);
    if (idx != -1) {
        danhSachDoiBong.splice(idx, 1);
    } else {
        console.log('Không tìm thấy!');
    }
}

function searchIndex(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i;
    }
    return -1;
}

function search(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return array[i];
    }
}