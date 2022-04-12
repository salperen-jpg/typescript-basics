const numbers = [1, 34, 5677, 4657, 345, 6];
const names = ['Sally', 'Jack', 'Steffan', 'Amanda'];

const sortedNumbers = numbers.sort((a, b) => a - b);
const sortedNames = names.sort();
sortedNumbers;
sortedNames;

const nameObjects = [
  {
    id: 5,
    name: 'Jack',
  },
  {
    id: 2,
    name: 'Zayn',
  },
  {
    id: 43,
    name: 'Amanda',
  },
];

const newObj = nameObjects.sort((a, b) => a.id - b.id);

// Reverse

numbers.reverse();
numbers;
