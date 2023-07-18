var students = [
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

// Cách 1: Dùng for each
students.forEach(function (student) {
    student.toan = Math.floor(Math.random() * 11);
    student.ly = Math.floor(Math.random() * 11);
    student.hoa = Math.floor(Math.random() * 11);
});

// Cách 2: Dùng map
// students = students.map(function (student) {
//     student.toan = Math.floor(Math.random() * 11);
//     student.ly = Math.floor(Math.random() * 11);
//     student.hoa = Math.floor(Math.random() * 11);
//     return student;
// });
console.log("=== DANH SÁCH SINH VIÊN ===");
for (const el of students) {
    for (const key in el) {
        console.log(key + ": " + el[key]);
    }
    console.log('===================');
}