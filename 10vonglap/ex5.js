function displayArray(array) {
    for (var el of array) {
        for (var key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}

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
    }
];

displayArray(students);