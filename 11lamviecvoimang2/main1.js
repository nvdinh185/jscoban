
var students = [
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
        ly: 4,
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

// 1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
var isEveryPass = students.every(function (student, index) {
    return student.toan >= 5 && student.ly >= 5 && student.hoa >= 5;
});

if (isEveryPass) {
    console.log("Tất cả sinh viên đều trên điểm trung bình!");
} else {
    console.log("Không phải tất cả sinh viên đều trên điểm trung bình!");
}

// 2. Kiểm tra xem có sinh viên nào xếp loại giỏi không?
var isGood = students.some(function (student, index) {
    return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
});

if (isGood) {
    console.log("Có sinh viên xếp loại giỏi");
} else {
    console.log("Không có sinh viên nào xếp loại giỏi");
}

// 3. Lọc ra các sinh viên xếp loại giỏi
var listGoodStudents = students.filter(function (student) {
    return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
});

// Dùng vòng lặp forEach để in ra
listGoodStudents.forEach(function (student) {
    console.log("Tên: " + student.name + " - Toán: " + student.toan + " - Lý: " + student.ly + " - Hóa: " + student.hoa);
});

// 4. Tìm 1 sinh viên xếp loại giỏi
var goodStudent = students.find(function (student) {
    return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
});

console.log(goodStudent);

// 5. Cộng cho mỗi sinh viên 1 điểm toán
var listNewStudents = students.map(function (student, index) {
    return {
        id: student.id,
        name: student.name,
        toan: student.toan < 10 ? student.toan + 1 : student.toan,
        ly: student.ly,
        hoa: student.hoa
    };
});

listNewStudents.forEach(function (student) {
    console.log("Tên: " + student.name + " - Toán: " + student.toan + " - Lý: " + student.ly + " - Hóa: " + student.hoa);
});

// 6. Tính tổng điểm toán của các sinh viên
var totalScore = students.reduce(function (total, student) {
    return total + student.toan;
}, 0);

console.log("Tổng điểm toán của các sinh viên: ", totalScore);
console.log("Điểm toán trung bình của các sinh viên: ", totalScore / students.length);