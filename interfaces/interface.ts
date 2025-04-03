interface person {
  name: string;
  age: number;
}

let personsList: person[] = [
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
console.log(`List of persons:` + JSON.stringify(personsList, null, 2));

interface add {
  (a: number, b: number): number;
}

let result: add = (a: number, b: number): number => {
  return a + b;
};
console.log(`Result of addition: ${result(5, 10)}`);
