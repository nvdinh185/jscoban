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

const menu = `=== QUẢN LÝ SINH VIÊN ===
1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
3. Lọc ra các sinh viên xếp loại giỏi
4. Tìm 1 sinh viên xếp loại giỏi
5. Cộng cho mỗi sinh viên 1 điểm toán
6. Thêm thuộc tính tổng điểm 3 môn
7. Tính tổng điểm của tất cả các sinh viên
8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
9. Thoát

Nhập thao tác lựa chọn:`;

var cont = true;
do {
    var input = prompt(menu);

    switch (input) {
        case '1':
            if (isUpNormal(students)) {
                console.log('Tất cả sinh viên đều có các môn trên điểm trung bình');
            } else {
                console.log('Không phải tất cả sinh viên đều có các môn trên điểm trung bình');
            }
            break;
        case '2':
            if (haveGoodStudent(students)) {
                console.log('có sinh viên nào xếp loại giỏi');
            } else {
                console.log('không có sinh viên nào xếp loại giỏi');
            }
            break;
        case '3':
            var listGoods = filterGoodStudents(students);
            console.table(listGoods);
            break;
        case '4':
            console.table(findGoodStudent(students));
            break;
        case '5':
            addOneMath(students);
            console.table(students);
            break;
        case '6':
            addPropertySum(students);
            console.table(students);
            break;
        case '7':
            console.log("Tổng điểm của các sinh viên: ", countTotalScore(students));
            break;
        case '8':
            console.log("Điểm trung bình của các sinh viên: ", (countTotalScore(students) / students.length).toFixed(2));
            break;
        case '9':
            sortStudents(students);
            console.table(students);
            break;
        case '10':
            exit();
            cont = false;
            break;
        default:
            alert("Vui lòng nhập đúng thao tác lựa chọn!");
    }
} while (cont);

// 1. Hàm kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
function isUpNormal(arrStudents) {
    return arrStudents.every(function (student) {
        return (student.toan >= 5 && student.ly >= 5 && student.hoa >= 5);
    })
}

// 2. Hàm kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
function haveGoodStudent(arrStudents) {
    return arrStudents.some(function (student) {
        return (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8);
    })
}

// 3. Lọc ra các sinh viên xếp loại giỏi
function filterGoodStudents(arrStudents) {
    return arrStudents.filter(function (student) {
        return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
    });
}

// 4. Hàm tìm 1 sinh viên xếp loại giỏi
function findGoodStudent(arrStudents) {
    return arrStudents.find(function (student) {
        return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
    });
}

// 5. Cộng cho mỗi sinh viên 1 điểm toán
function addOneMath(arrStudents) {
    arrStudents.forEach(function (student) {
        student.toan < 10 ? student.toan += 1 : '';
    });
}

// 6. Thêm thuộc tính tổng điểm
function addPropertySum(arrStudents) {
    arrStudents.forEach(function (student) {
        student.sum = student.toan + student.ly + student.hoa;
    })
}

// 7. Tính tổng số điểm của tất cả các sinh viên
function countTotalScore(arrStudents) {
    return arrStudents.reduce(function (total, student) {
        return total + student.sum;
    }, 0);
}

// 9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
function sortStudents(arrStudents) {
    function compare(a, b) {
        if (a.sum > b.sum) {
            return 1;
        }
        if (a.sum < b.sum) {
            return -1;
        }
        return 0;
    }

    arrStudents.sort(compare);
}

// 10. Thoát
function exit() {
    console.log('Good bye!!!');
}