var address1 = {
    street: '123 Main St',
    city: 'New York',
};
var address2 = {
    street: '456 Elm St',
};
address1.city = 'Los Angeles';
console.log("Address 1: ".concat(JSON.stringify(address1, null, 2)));
console.log("Address 2: ".concat(JSON.stringify(address2, null, 2)));
var person1 = {
    name: 'John Doe',
    age: 30,
};
console.log("Person 1: ".concat(JSON.stringify(person1, null, 2)));
var employee1 = {
    name: 'Jane Smith',
    age: 25,
    position: 'Software Engineer',
};
console.log("Employee 1: ".concat(JSON.stringify(employee1, null, 2)));
