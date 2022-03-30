const numbers = [10, 20, 30, 40, 50];
// const first = numbers[0];
// const second = numbers[1];

// destructuring
const [x, y, rest] = numbers;
console.log(x, y, rest);
// x points first one and rest the others.

// copying numbers
const newArrays = [...numbers];
newArrays;

const [first, second] = newArrays;

console.log(first, second);

// REFERENCES
const people = [
  {
    name: 'Salih',
  },
  {
    name: 'Alperen',
  },
];
people;

const copyOfPeople = [...people];
copyOfPeople;
copyOfPeople[0].name = 'Alperen';
copyOfPeople;
people;

// FIND BY INDEX
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// If it is not there -1 if it is there index
console.log(names.indexOf('Alice'));
console.log(names.indexOf('Alice', 1));

console.log(names.lastIndexOf('Alice'));

// FIND INDEX
console.log(names.findIndex((name) => name === 'Bruce'));

// INCLUDES,SOME ,EVERY,
const myNumbers = [10, -20, 30, -40, 50];

// OLD SCHOOL
console.log(myNumbers.includes(10));

// SOME
console.log(myNumbers.some((num) => num > 20));

// EVERY
console.log(myNumbers.every((num) => num > 20));
