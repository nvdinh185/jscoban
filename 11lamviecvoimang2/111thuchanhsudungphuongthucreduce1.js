var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(array) {
    return array.reduce(function (total, element) {
        return total + element.gold;
    }, 0)
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23