var personsList = [
    {
        name: 'John Doe',
        age: 30,
    },
    {
        name: 'Jane Smith',
        age: 25,
    },
    {
        name: 'Alice Johnson',
        age: 28,
    },
    {
        name: 'Bob Brown',
        age: 35,
    },
];
console.log("List of persons:" + JSON.stringify(personsList, null, 2));
var result = function (a, b) {
    return a + b;
};
console.log("Result of addition: ".concat(result(5, 10)));
