function getRandomItem(array) {
    var arrLen = array.length - 1;
    var random = Math.floor(Math.random() * arrLen);
    return array[random];
}

var arrNum = [1, 3, 4, 2, 6, 5, 6, 7];

console.log(getRandomItem(arrNum));