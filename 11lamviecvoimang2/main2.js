var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 20
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

var newCourses = courses.map(function (course) {
    course.name = `Khoa hoc ${course.name}`;
    course.textCoin = `Gia ${course.coin}`;
    return course;
});

console.log(newCourses);

var totalCoin1 = 0;
for (let i = 0; i < courses.length; i++) {
    totalCoin1 += courses[i].coin;
}

console.log(totalCoin1);

var totalCoin2 = 0;
for (let course of courses) {
    totalCoin2 += course.coin;
}

console.log(totalCoin2);

var totalCoin = courses.reduce(function (total, course) {
    return total + course.coin;
}, 0);

console.log(totalCoin);

var arrayNumber = [1, 2, 3, [4, 5], 6, 7, [8, 9, 0]];

var totals = arrayNumber.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(totals);

var arrayNumber = [1, 2, 3, 4, 5];

var totals2 = arrayNumber.reduce(function (flatOutput, depthItem) {
    return flatOutput + depthItem;
});

console.log(totals2);

var topics = [
    {
        topic: "front-end",
        courses: [
            {
                id: 1,
                name: "Javascript",
                coin: 20
            },
            {
                id: 2,
                name: "HTML/CSS",
                coin: 30
            }
        ]
    },
    {
        topic: "back-end",
        courses: [
            {
                id: 1,
                name: "Java",
                coin: 50
            },
            {
                id: 2,
                name: "NodeJs",
                coin: 40
            }
        ]
    }
]

var arrayTopics = topics.reduce(function (flatOutput, topic, idx) {
    return flatOutput.concat(topic.courses);
}, []);

console.log(arrayTopics);