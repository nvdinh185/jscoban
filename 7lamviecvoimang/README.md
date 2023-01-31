## Bài 1: Viết chương trình nhập mảng, xuất mảng, đảo mảng, sắp xếp mảng

## Bài 2: Viết chương trình tạo 1 mảng gồm 100 phần tử là các số ngẫu nhiên từ 0 -> 99. Xuất mảng ra màn hình console:
1. Đếm xem có bao nhiêu số 0 trong mảng
2. Đếm xem có bao nhiêu số nguyên tố trong mảng
3. Đếm xem có bao nhiêu số hoàn hảo trong mảng
4. Đếm xem có bao nhiêu số fibonacci trong mảng
5. Đếm xem có bao nhiêu số đối xứng trong mảng

# BÀI TẬP ĐỂ ÁP DỤNG CÁC HÀM CƠ BẢN ĐỐI VỚI MẢNG: pop, shift, push, unshift, splice, concat, slice

## Bài 3: Cho mảng các số từ 1 đến 10 như sau:

```js
var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

1. in mảng theo thứ tự index tăng dần

2. in mảng theo thứ tự index giảm dần

3. Xóa phần tử cuối cùng của mảng

4. Xóa phần tử đầu tiên của mảng

5. Thêm phần tử 0 vào cuối mảng

6. Thêm phần tử 0 vào đầu mảng

7. Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới

8. Chèn thêm số 100 vào phần tử thứ 5 của mảng

9. Thay thế phần tử thứ 5 bằng số 100

10. copy từ mảng arrNumber thành 1 mảng mới từ phần tử 5 đến hết

11. copy từ mảng arrNumber thành 1 mảng mới từ phần tử đầu tiên đến phần tử thứ 5

12. Cho mảng sau:
```js
var arrNumber2 = [11, 22, 33, 44, 55];
```
- Nối mảng arrNumber2 vào mảng arrNumber

## Bài 4: Chạy chương trình sau và ghi chép những gì đã học được
```js
// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
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
    for (let n of array) {
        if (n === number) return n;
    }
}

var arrayNumber = [];

for (let i = 0; i < 10; i++) {
    arrayNumber.push(getRandomInt(10));
}
console.log(arrayNumber);

var input = prompt('Nhập số muốn tìm: ');

if (search(Number(input), arrayNumber)) {
    console.log('Có tìm thấy số ' + input + ' trong mảng');
} else {
    console.log('Không tìm thấy!');
}

var idx = searchIndex(Number(input), arrayNumber);
if (idx !== -1) {
    console.log("Vị trí tìm thấy số " + input + " là: " + idx);
}

bubbleSort(arrayNumber);
console.log(arrayNumber);
```

