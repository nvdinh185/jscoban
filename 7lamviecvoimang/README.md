# BÀI TẬP VỀ MẢNG:

## Bài 1: Viết chương trình nhập 1 mảng, sau đó xuất mảng vừa nhập ra màn hình

## Bài 2: Viết chương trình 1 nhập mảng các số:
- xuất mảng vừa nhập
- tìm số lớn nhất trong mảng
- tìm số nhỏ nhất trong mảng
- tính tổng các số trong mảng

## Bài 3: Viết chương trình tạo 1 mảng gồm 100 phần tử là các số ngẫu nhiên từ 0 -> 99. Xuất mảng ra màn hình console:
1. Đếm xem có bao nhiêu số 0 trong mảng
2. Đếm xem có bao nhiêu số nguyên tố trong mảng
3. Đếm xem có bao nhiêu số hoàn hảo trong mảng
4. Đếm xem có bao nhiêu số fibonacci trong mảng
5. Đếm xem có bao nhiêu số đối xứng trong mảng

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

## Bài 5: Cho 1 mảng 
```js
var arrNumber = ['111', '222', '333', '444']
```
1. Kiểm tra xem mảng có phần tử nào có giá trị bằng 222 không? Nếu có thì xoá nó đi
2. Nếu mảng có phần tử có kiểu và giá trị bằng 444 thì thay thế phần tử đó thành '555'
3. Đổi tất cả phần tử trong mảng ra kiểu số, in mảng đó ra màn hình

## Bài 6: Viết chương trình nhập 1 mảng các số:
- xuất mảng vừa nhập
- đảo các phần tử trong mảng
- sắp xếp các phần tử trong mảng theo thứ tự tăng dần