var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log('Original names array:', names);
var ages = [25, 30, 35, 40, 45];
console.log('Original ages array:', ages);
var mixedArray = ['Alice', 25, 'Bob', 30, 'Charlie', 35];
console.log('Original mixed array:', mixedArray);
var persons = [
    { name: 'Alice', age: 25, isStudent: true },
    { name: 'Bob', age: 30, isStudent: false },
    { name: 'Charlie', age: 35, isStudent: true },
    { name: 'David', age: 40, isStudent: false },
];
console.log('Original persons array:', persons);
var personsTuple = [
    ['Alice', 25, true],
    ['Bob', 30, false],
    ['Charlie', 35, true],
    ['David', 40, false],
];
console.log('Original persons tuple array:', personsTuple);
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Sunday"] = 0] = "Sunday";
    daysOfWeek[daysOfWeek["Monday"] = 1] = "Monday";
    daysOfWeek[daysOfWeek["Tuesday"] = 2] = "Tuesday";
    daysOfWeek[daysOfWeek["Wednesday"] = 3] = "Wednesday";
    daysOfWeek[daysOfWeek["Thursday"] = 4] = "Thursday";
    daysOfWeek[daysOfWeek["Friday"] = 5] = "Friday";
    daysOfWeek[daysOfWeek["Saturday"] = 6] = "Saturday";
})(daysOfWeek || (daysOfWeek = {}));
console.log('Days of the week enum:', daysOfWeek);
var day = daysOfWeek.Monday;
console.log('Selected day:', day);
