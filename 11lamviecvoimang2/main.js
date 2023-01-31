var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 0
    },
    {
        id: 2,
        name: "PHP",
        coin: 0
    },
    {
        id: 3,
        name: "Ruby",
        coin: 30
    },
    {
        id: 4,
        name: "Java",
        coin: 10
    },
    {
        id: 5,
        name: "Dark",
        coin: 0
    }
]

var isEveryFree = courses.every(function (course, index) {
    console.log(index);
    return course.coin === 0;
})
console.log("isEveryFree: " + isEveryFree);

var isSomeFree = courses.some(function (course, index) {
    console.log(index);
    return course.coin === 0;
})

console.log("isSomeFree: " + isSomeFree);