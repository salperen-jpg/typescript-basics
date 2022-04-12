const numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const deepNumbers = [[[[10, 20, 30]]], [[[40, 50, 60]]]];

const newOne = deepNumbers.flat(Infinity);
newOne;

// FLAT MAP
const values = [10, 20, 30, 40, 50];
values.map((v, i) => [v, i]);
values.flatMap((v, i) => [v, i]);

// CONCAT
const first = [10, 20];
const second = [30, 40, 50];

first.concat(second);
