function greeting(name: string, text?: string): string {
  if (text) {
    return `Hello ${name}, ${text}`;
  } else {
    return `Hello ${name}`;
  }
}
console.log(greeting('Juan', 'welcome to the course'));
console.log(greeting('Juan'));

function addAll(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(addAll(1, 2, 3, 4, 5));

function sayBay(name: string, msg: string = 'Bye'): string {
  return `${msg} ${name}`;
}

console.log(sayBay('Juan'));
console.log(sayBay('Juan', 'See you later'));
