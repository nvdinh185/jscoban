const arrWords = [];

const menu = `== TỪ ĐIỂN ANH VIỆT ==
1. Nhập dữ liệu:
2. Xuất dữ liệu:
3. Dịch từ:
4. Thoát:

Nhập thao tác lựa chọn:`;

var cont = true;
do {
    var input = prompt(menu);

    switch (input) {
        case '':
            alert("Vui lòng nhập thao tác lựa chọn!");
            break;
        case '1':
            var eng = prompt("Nhập từ tiếng Anh: ");
            var check = false;
            for (var el of arrWords) {
                if (el.eng === eng) {
                    check = true;
                }
            }
            if (!check) {
                var vie = prompt("Nhập nghĩa tiếng Việt: ");
                var newWord = {
                    eng: eng,
                    vie: vie
                }
                arrWords.push(newWord);
            } else {
                alert('Từ này đã có trong từ điển!');
            }

            break;
        case '2':
            console.log('== DANH SÁCH CÁC TỪ ==');
            for (const el of arrWords) {
                for (const key in el) {
                    console.log(key + ": " + el[key]);
                }
                console.log("================");
            }
            break;
        case '3':
            var engWord = prompt("Nhập từ tiếng Anh muốn tra: ");

            var searchWord = search(engWord, arrWords);
            if (!searchWord) {
                alert("Không tìm thấy!");
            } else {
                console.log(searchWord);
            }
            break;
        case '4':
            console.log("Cám ơn đã sử dụng từ điển!");
            cont = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (cont);

function search(str, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].eng === str) return array[i];
    }
}