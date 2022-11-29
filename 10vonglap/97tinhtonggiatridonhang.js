var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(array) {
    var sum = 0, arrLen = array.length;
    for (var i = 0; i < arrLen; i++) {
        sum += array[i].price;
    }
    console.log(sum);
}

// Expected results:
getTotal(orders) // Output: 8700000