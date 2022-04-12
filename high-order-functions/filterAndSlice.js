const numbers = [10, -20, 30, -40, 50, 70];

const positiveNumbers = numbers.filter((num) => num > 0);

const negativeNumbers = numbers.filter((num) => num < 0);

const positiveUnder50 = numbers.filter((num) => num < 50 && num > 0);

// With the Object
const people = [{ name: 'John' }, { name: 'Ann' }];

const person = people.filter((person) => person.name.startsWith('J'));

person[0].name = 'Jack';

// Qualifying next number

const myNumbers = [9, 10, 11, 13, 14, 15];

const hasNext = myNumbers.filter((v, _, myNumbers) =>
  myNumbers.includes(v + 1)
);

// SLICE

const somePart = myNumbers.slice(1);
