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
        hoa: 9,
    },
    {
        id: 3,
        name: "Tan",
        toan: 4,
        ly: 3,
        hoa: 5,
    }
];


function addProperty(arr) {
    return arr.map(function (e) {
        e.sum = e.toan + e.ly + e.hoa;
        return e;
    })
}


function sortArray(arr) {
    function compare(a, b) {
        if (a.toan > b.toan) {
            return -1;
        }
        if (a.toan < b.toan) {
            return 1;
        }
        return 0;
    }
    arr.sort(compare);
}

addProperty(students);
sortArray(students);

for (const el of students) {
    for (const key in el) {
        console.log(key + ": " + el[key]);
    }
    console.log("================");
}