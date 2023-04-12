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

const menu = `== QUẢN LÝ SINH VIÊN ==
1. Xem danh sách sinh viên
2. Thêm sinh viên
3. Sửa sinh viên
4. Xóa sinh viên
5. Thoát

Nhập thao tác lựa chọn:`;


function generateUuid() {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

do {
    var input = prompt(menu);

    if (input == 1) {
        display(students);
    } else if (input == 2) {
        addStudent(students);
    } else if (input == 3) {
        editStudent(students);
    } else if (input == 4) {
        deleteStudent(students);
    } else {
        console.log("Good bye!");
        break;
    }
} while (true);

// Thêm sinh viên
function addStudent(arrStudents) {
    var newName = prompt("Nhập tên sinh viên: ");
    var newAddress = prompt("Nhập địa chỉ: ");
    var newStudent = {
        id: generateUuid(),
        name: newName,
        address: newAddress
    }

    arrStudents.push(newStudent);
}

// Sửa sinh viên
function editStudent(arrStudents) {
    var idEdit = prompt("Nhập mã sinh viên muốn sửa: ");

    // Tìm chỉ số của sinh viên muốn sửa
    var editIndex = searchIndex(Number(idEdit), arrStudents);

    if (editIndex == -1) {
        alert("Không tìm thấy sinh viên muốn sửa!");
    } else {
        // Lấy thông tin sinh viên muốn sửa
        var editStudent = search(Number(idEdit), arrStudents);

        var nameEdit = prompt("Nhập tên sinh viên muốn sửa: ", editStudent.name);
        var addressEdit = prompt("Nhập địa chỉ sinh viên muốn sửa: ", editStudent.address);

        var student = {
            id: Number(idEdit),
            name: nameEdit,
            address: addressEdit
        }
        arrStudents.splice(editIndex, 1, student);
    }
}

// Xóa sinh viên
function deleteStudent(arrStudents) {
    var idDel = prompt("Nhập mã sinh viên muốn xóa: ");

    // Tìm chỉ số của sinh viên muốn xóa
    var delIndex = searchIndex(Number(idDel), arrStudents);

    if (delIndex != -1) {
        arrStudents.splice(delIndex, 1);
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

// Tìm sinh viên theo id
function search(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return array[i];
    }
}

// Hàm hiển thị danh sách sinh viên
function display(arrStudents) {
    console.log('===DANH SÁCH SINH VIÊN===');
    for (const el of arrStudents) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}