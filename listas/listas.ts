let names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log('Original names array:', names);

let ages: number[] = [25, 30, 35, 40, 45];
console.log('Original ages array:', ages);

let mixedArray: (string | number)[] = ['Alice', 25, 'Bob', 30, 'Charlie', 35];
console.log('Original mixed array:', mixedArray);

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let persons: Person[] = [
  { name: 'Alice', age: 25, isStudent: true },
  { name: 'Bob', age: 30, isStudent: false },
  { name: 'Charlie', age: 35, isStudent: true },
  { name: 'David', age: 40, isStudent: false },
];
console.log('Original persons array:', persons);

let personsTuple: [string, number, boolean][] = [
  ['Alice', 25, true],
  ['Bob', 30, false],
  ['Charlie', 35, true],
  ['David', 40, false],
];
console.log('Original persons tuple array:', personsTuple);

enum daysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
console.log('Days of the week enum:', daysOfWeek);
let day : daysOfWeek = daysOfWeek.Monday;
console.log('Selected day:', day);
