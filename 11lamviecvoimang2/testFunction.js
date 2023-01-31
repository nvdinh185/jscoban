//javascript pass by reference
function callByReference(varObj) {

    console.log("Inside Call by Reference Method");

    varObj.a = 100;

    console.log(varObj);

}

let varObj = {
    a: 1
};

console.log("Before Call by Reference Method");

console.log(varObj);

callByReference(varObj)

console.log("After Call by Reference Method");

console.log(varObj);

var arr = [1, 3, 2, 4, 3, 2];

function addElement(array) {
    array.push(5);
}
addElement(arr);

console.log(arr);

function compare(a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
}
arr.sort(compare);

console.log(arr);
