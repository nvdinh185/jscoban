# BÀI TẬP ĐỂ ÁP DỤNG HÀM, VÒNG LẶP ĐỐI VỚI MẢNG CÁC OBJECT

## Bài tập 1: Viết chương trình mô phỏng từ điển Anh Việt

Tạo menu chương trình như sau:
--------------------------------------
== TỪ ĐIỂN ANH VIỆT ==
1. Nhập dữ liệu
2. Xuất dữ liệu
3. Dịch từ
4. Thoát
--------------------------------------
- Khi chọn 1: Nhập thông tin các từ (gồm 2 thuộc tính: từ tiếng Anh và nghĩa tiếng Việt) từ bàn phím.
- Khi chọn 2: Hiển thị thông tin các từ đã nhập.
- Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó. Nếu không có thì in ra không tìm thấy.
- Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ "Cảm ơn đã sử dụng từ điển!"

## Bài tập 2: Cho mảng sinh viên gồm các thông tin như sau:

```js
const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];
```

Tạo menu chương trình như sau:
--------------------------------------
== QUẢN LÝ SINH VIÊN ==
1. Xem danh sách sinh viên
2. Thêm sinh viên
3. Sửa sinh viên
4. Xóa sinh viên
--------------------------------------
- Khi chọn 1: Hiện thị tất cả sinh viên trong danh sách.
- Khi chọn 2: Nhập mới 1 sinh viên và thêm vào danh sách.
- Khi chọn 3: Sửa 1 sinh viên trong danh sách theo id nhập vào.
- Khi chọn 4: Xóa 1 sinh viên trong danh sách theo id nhập vào.

## Bài tập 3: Cho danh sách các đội bóng tham dự World Cup như sau:

```js
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
```

Tạo menu như sau:
---------------------------------------
1. Nhập dữ liệu
2. Xuất dữ liệu
3. Tìm thông tin
4. Xóa thông tin đội bóng
5. In những đội bóng có số lần vô địch lớn hơn 5
6. Thoát
---------------------------------------

- Khi chọn 1: Nhập đội bóng tham gia World Cup.
- Khi chọn 2: Hiển thị thông tin các đội bóng đã nhập
- Khi chọn 3: Nhập vào id và hiển thị thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy"
- Khi chọn 4: Nhập vào id và xóa thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy đội bóng nào để xóa".
- Khi chọn 5: In thông tin những đội bóng có số lần vô địch lớn hơn 5
- Khi chọn 6: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

## Bài tập 4: Cho danh sách các quân bài như sau:

```js
const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
]
```

Tạo menu như sau:
---------------------------------------
1. Nhập 1 quân bài
2. Nhập mảng các quân bài
3. Sắp xếp tăng dần
4. Sắp xếp giảm dần
5. Xuất dữ liệu
6. Thoát
---------------------------------------

- Khi chọn 1: Nhập 1 quân bài và thêm vào danh sách
- Khi chọn 2: Nhập mảng các quân bài và thêm vào danh sách
- Khi chọn 3: Sắp xếp các quân bài theo hệ số tăng dần
- Khi chọn 4: Sắp xếp các quân bài theo hệ số giảm dần
- Khi chọn 5: Hiển thị danh sách các quân bài
- Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

## Bài tập 5: Cho mảng sinh viên gồm các thông tin như sau:


```js
const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 5,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];
```

- Viết chương trình (sử dụng function, vòng lặp (for, while), switch...case) để xử lý các công việc sau:

1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)

2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)

3. Lọc ra các sinh viên xếp loại giỏi và in ra

4. Tìm 1 sinh viên xếp loại giỏi

5. Cộng cho mỗi sinh viên 1 điểm toán

6. Thêm thuộc tính tổng điểm 3 môn

7. Tính tổng điểm của các sinh viên

8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
