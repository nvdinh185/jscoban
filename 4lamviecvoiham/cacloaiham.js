declarationFunction();// gọi hàm trước khi định nghĩa
function declarationFunction() {
    console.log('Đây là declarationFunction');
}

const expressionFunction = function () {
    console.log('Đây là expressionFunction');
}
expressionFunction();// gọi hàm sau khi định nghĩa

const writeLog = function () {
    console.log("Đây là 1 dòng log");
}

setTimeout(writeLog, 2000);