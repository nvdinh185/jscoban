# BÀI TẬP VỀ MẢNG:

## Bài 1: Viết chương trình nhập 1 mảng, sau đó xuất mảng vừa nhập ra màn hình

## Bài 2: Tạo menu như sau:
---------------------------------------
-- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. Tìm số lớn nhất
4. Tìm số nhỏ nhất
5. Tính tổng
6. Thoát
---------------------------------------

- Khi chọn 1: Gọi hàm để nhập mảng
- Khi chọn 2: Gọi hàm để xuất mảng
- Khi chọn 3: Gọi hàm tìm số lớn nhất trong mảng
- Khi chọn 4: Gọi hàm tìm số nhỏ nhất trong mảng
- Khi chọn 5: Gọi hàm tính tổng các số trong mảng
- Khi chọn 6: Thoát khỏi chương trình


## Bài 3: Tạo menu như sau:
---------------------------------------
-- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. In số nguyên tố
4. In số hoàn hảo
5. Đếm số nguyên tố
6. Đếm số hoàn hảo
7. Thoát
---------------------------------------

- Khi chọn 1: Gọi hàm tạo mảng gồm 100 phần tử là các số ngẫu nhiên từ 0 -> 99
- Khi chọn 2: Gọi hàm xuất mảng
- Khi chọn 3. In các số nguyên tố trong mảng
- Khi chọn 4. In các số hoàn hảo trong mảng
- Khi chọn 5. Đếm xem có bao nhiêu số nguyên tố trong mảng
- Khi chọn 6. Đếm xem có bao nhiêu số hoàn hảo trong mảng
- Khi chọn 7. Thoát khỏi chương trình

## Bài 4: Chạy chương trình sau và ghi chép những gì đã học được
```js
// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) return i;
    }
    return -1;
}

// Hàm sắp xếp nổi bọt
function bubbleSort(array) {
    var size = array.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Hàm tìm một số trong mảng
function search(number, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == number) return array[i];
    }
}

var arrayNumber = [];

// Lặp để tạo mảng gồm 10 số ngẫu nhiên từ 0 đến 9
for (let i = 0; i < 10; i++) {
    arrayNumber.push(getRandomInt(10));
}
console.log(arrayNumber);

var input = prompt('Nhập số muốn tìm: ');

if (search(input, arrayNumber)) {
    console.log('Có tìm thấy số ' + input + ' trong mảng');
} else {
    console.log('Không tìm thấy!');
}

var idx = searchIndex(input, arrayNumber);
if (idx != -1) {
    console.log("Vị trí tìm thấy số " + input + " là: " + idx);
}

bubbleSort(arrayNumber);// gọi hàm sắp xếp mảng theo thứ tự tăng dần
console.log(arrayNumber);
```

## Bài 5: Cho 1 mảng 
```js
var arrNumber = ['111', '222', '333', '444']
```
1. Kiểm tra xem mảng có phần tử nào có giá trị bằng 222 không? Nếu có thì xoá nó đi
2. Nếu mảng có phần tử có kiểu và giá trị bằng 444 thì thay thế phần tử đó thành '555'
3. Đổi tất cả phần tử trong mảng ra kiểu số, in mảng đó ra màn hình

## Bài 6: Áp dụng những gi học được ở bài 4 để làm bài sau:
### Tạo menu như sau:
---------------------------------------
-- CHỌN CHỨC NĂNG --
1. Tạo mảng
2. Xuất mảng
3. Đảo mảng
4. Sắp xếp mảng
5. Tìm 1 số
6. Thoát
---------------------------------------

- Khi chọn 1: Gọi hàm tạo mảng gồm 10 phần tử là các số ngẫu nhiên từ 0 đến 100
- Khi chọn 2: Gọi hàm xuất mảng
- Khi chọn 3: Gọi hàm đảo các phần tử của mảng
- Khi chọn 4: Gọi hàm sắp xếp các phần tử của mảng theo thứ tự tăng dần
- Khi chọn 5: Gọi hàm nhập 1 số bất kỳ rồi tìm số đó trong mảng, nếu có thì in chỉ số của phần tử tìm thấy, nếu không thì in "Không tìm thấy"
- Khi chọn 6: Thoát khỏi chương trình