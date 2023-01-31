//javascript pass by value
function square(x) {

    x = x * x;

    return x;

}

var y = 10;

var result = square(y);

console.log(y); // 10 -- no change
console.log(result); // 100