// Làm bài
function getRandNumbers(min, max, length) {
    var array = [];
    for (var i = 1; i <= length; i++) {
        var random = Math.random() * (max - min) + min;
        array.push(random);
    }
    return array;
}

console.log(getRandNumbers(1, 10, 10));

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */