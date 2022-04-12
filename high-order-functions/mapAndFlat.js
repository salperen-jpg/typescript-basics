const numbers = [10, 20, 30, 40, 50];

const newNumbers = numbers.map((num) => num * 10);

const newNumbersObj = numbers.map((num) => ({ val: num * 10 }));
const numbersWithNegatives = [-10, 20, 30, -40, -50];
const posiviteNumbersMulBy10 = numbersWithNegatives
  .filter((v) => v > 0)
  .map((v) => v * 10);

const people = [
  {
    first: 'Jane',
    last: 'Smith',
    address: {
      city: 'Oakland',
    },
  },
  {
    first: 'Sally',
    last: 'Joe',
    address: {
      city: 'Foster City',
    },
  },
];

const newObj = people.map((person) => {
  return { ...person, fullName: `${person.first} ${person.last}` };
});

newObj[0].first = 'Salih';
newObj[0].address.city = 'California';
