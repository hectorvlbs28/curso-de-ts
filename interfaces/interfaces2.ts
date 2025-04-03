interface address {
  street: string;
  city?: string;
}
let address1: address = {
  street: '123 Main St',
  city: 'New York',
};
let address2: address = {
  street: '456 Elm St',
};
address1.city = 'Los Angeles';
console.log(`Address 1: ${JSON.stringify(address1, null, 2)}`);
console.log(`Address 2: ${JSON.stringify(address2, null, 2)}`);

interface personReadOnly {
  readonly name: string;
  readonly age: number;
}
let person1: personReadOnly = {
  name: 'John Doe',
  age: 30,
};
console.log(`Person 1: ${JSON.stringify(person1, null, 2)}`);

interface employee extends personReadOnly {
  position: string;
}
let employee1: employee = {
  name: 'Jane Smith',
  age: 25,
  position: 'Software Engineer',
};
console.log(`Employee 1: ${JSON.stringify(employee1, null, 2)}`);