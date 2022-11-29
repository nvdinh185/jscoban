function writeLog() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function sumArray() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

writeLog(1, 2, 3, 4, 5);
console.log(sumArray(1, 2, 3, 4, 5, 6));