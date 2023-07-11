const danhSachDoiBong = [
    {
        id: '1',
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: '2',
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 4
    },
    {
        id: '3',
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]

const menu = `1. Nhập dữ liệu
2. Xuất dữ liệu
3. Sửa dữ liệu
4. Tìm thông tin
5. Xóa thông tin đội bóng
6. In những đội bóng có số lần vô địch lớn hơn 5
7. Thoát

Nhập thao tác lựa chọn:`;

do {
    var input = prompt(menu);
    if (input == 1) {
        them();
    } else if (input == 2) {
        display();
    } else if (input == 3) {
        sua();
    } else if (input == 4) {
        tim();
    } else if (input == 5) {
        xoa();
    } else if (input == 6) {
        inThongTin();
    } else {
        console.log('Goodbye!');
        break;
    }
} while (true);

// 1. Thêm đội bóng
function them() {
    var id = prompt('Nhập mã đội bóng:');
    var ten = prompt('Nhập tên đội bóng:');
    var huanLuyenVien = prompt('Nhập tên huấn luyện viên:');
    var soLanVoDich = prompt('Nhập số lần vô địch: ');
    var doiBongMoi = {
        id: id,
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

// 3. Sửa đội bóng
function sua() {
    var idEdit = prompt("Nhập mã đội bóng muốn sửa: ");

    // Tìm chỉ số của đội bóng muốn sửa
    var editIndex = searchIndex(idEdit, danhSachDoiBong);

    if (editIndex == -1) {
        alert("Không tìm thấy đội bóng muốn sửa!");
    } else {
        // Lấy thông tin sinh viên muốn sửa
        var editItem = search(idEdit, danhSachDoiBong);

        var tenMoi = prompt("Nhập tên đội bóng muốn sửa: ", editItem.ten);
        var huanLuyenVienMoi = prompt("Nhập huấn luyện viên muốn sửa: ", editItem.huanLuyenVien);
        var soLanVoDichMoi = prompt("Nhập số lần vô địch muốn sửa: ", editItem.soLanVoDich);

        var editDB = {
            id: idEdit,
            ten: tenMoi,
            huanLuyenVien: huanLuyenVienMoi,
            soLanVoDich: soLanVoDichMoi
        }
        danhSachDoiBong.splice(editIndex, 1, editDB);
    }
}

// 4. Tìm đội bóng
function tim() {
    var id = prompt('Nhập id đội bóng muốn tìm: ');
    var doiBong = search(id, danhSachDoiBong);
    if (doiBong) {
        console.log(doiBong);
    } else {
        console.log('Không tìm thấy!');
    }
}

// 5. Xóa đội bóng
function xoa() {
    var id = prompt('Nhập id đội bóng muốn xóa: ');
    var idx = searchIndex(id, danhSachDoiBong);
    if (idx != -1) {
        danhSachDoiBong.splice(idx, 1);
    } else {
        console.log('Không tìm thấy!');
    }
}

// 6. In những đội bóng có số lần vô địch lớn hơn 5
function inThongTin() {
    console.log('THÔNG TIN ĐỘI BÓNG CÓ SỐ LẦN VÔ ĐỊCH LỚN HƠN 5');
    for (const el of danhSachDoiBong) {
        if (el.soLanVoDich > 5) {
            for (const key in el) {
                console.log(key + ": " + el[key]);
            }
            console.log("================");
        }
    }
}

// Hàm tìm chỉ số của phần tử trong mảng
function searchIndex(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i;
    }
    return -1;
}

// Hàm tìm phần tử trong mảng
function search(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return array[i];
    }
}