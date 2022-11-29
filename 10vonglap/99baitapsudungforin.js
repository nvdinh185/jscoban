function run(object) {
    var array = [];
    for (var key in object) {
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return array;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]