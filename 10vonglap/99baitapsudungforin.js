function run(object) {
    var array = [];
    for (var key in object) {
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return array;
}

// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

var myObject = {
    name: "DinhNV",
    age: 18,
    address: 'Hue'
}

// for (const key in myObject) {
//     console.log(key + ': ' + myObject[key]);
// }

var myArray = [
    {
        id: 1,
        name: "HoaLT",
        age: 20,
        address: 'Quang Nam'
    },
    {
        id: 2,
        name: "DinhNV",
        age: 18,
        address: 'Hue'
    },
    {
        id: 3,
        name: "HungTV",
        age: 18,
        address: 'Da Nang'
    }
]

for (const el of myArray) {
    for (const key in el) {
        console.log(key + ': ' + el[key]);
    }
    console.log('=================');
}