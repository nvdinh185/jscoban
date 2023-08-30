const students = [
    {
        id: '1',
        name: "Dinh",
        address: "hue"
    },
    {
        id: '2',
        name: "Nam",
        address: "quang nam"
    },
    {
        id: '3',
        name: "Tan",
        address: "da nang"
    },
    {
        id: '4',
        name: "Hung",
        address: "hue"
    },
    {
        id: '5',
        name: "Tri",
        address: "quang tri"
    },
    {
        id: '6',
        name: "Anh",
        address: "hue"
    },
    {
        id: '7',
        name: "Binh",
        address: "da nang"
    }
];

const menu = `== QUẢN LÝ SINH VIÊN ==
1. Xem danh sách sinh viên
2. Thêm sinh viên
3. Sửa sinh viên
4. Xóa sinh viên
5. Thoát

Nhập thao tác lựa chọn:`;

do {
    var input = prompt(menu);

    if (input == 1) {
        display();
    } else if (input == 2) {
        addStudent();
    } else if (input == 3) {
        editStudent();
    } else if (input == 4) {
        deleteStudent();
    } else {
        console.log("Good bye!");
        break;
    }
} while (true);

// Thêm sinh viên
function addStudent() {
    var id = prompt("Nhập mã sinh viên: ");
    var newName = prompt("Nhập tên sinh viên: ");
    var newAddress = prompt("Nhập địa chỉ: ");
    var newStudent = {
        id: id,
        name: newName,
        address: newAddress
    }
    students.push(newStudent);
}

// Sửa sinh viên
function editStudent() {
    var idEdit = prompt("Nhập mã sinh viên muốn sửa: ");

    // Tìm chỉ số của sinh viên muốn sửa
    var editIndex = searchIndex(idEdit, students);

    if (editIndex == -1) {
        alert("Không tìm thấy sinh viên muốn sửa!");
    } else {

        var nameEdit = prompt("Nhập tên sinh viên muốn sửa: ", students[editIndex].name);
        var addressEdit = prompt("Nhập địa chỉ sinh viên muốn sửa: ", students[editIndex].address);

        var student = {
            id: idEdit,
            name: nameEdit,
            address: addressEdit
        }
        students.splice(editIndex, 1, student);
    }
}

// Xóa sinh viên
function deleteStudent() {
    var idDel = prompt("Nhập mã sinh viên muốn xóa: ");

    // Tìm chỉ số của sinh viên muốn xóa
    var delIndex = searchIndex(idDel, students);

    if (delIndex != -1) {
        students.splice(delIndex, 1);
        alert("Đã xóa thành công sinh viên có mã " + idDel);
    } else {
        alert("Không tìm thấy sinh viên muốn xóa!");
    }
}

// Tìm chỉ số sinh viên theo id
function searchIndex(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i;
    }
    return -1;
}

// Hàm hiển thị danh sách sinh viên
function display() {
    console.log('===DANH SÁCH SINH VIÊN===');
    for (const el of students) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}