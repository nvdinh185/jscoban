function getTotal(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    console.log(res);
}

// Expected results
getTotal([1, 2, 3]) // Output: 6
getTotal([4, 5, -3]) // Output: 6
getTotal([4, 5, 3, 5]) // Output: 17