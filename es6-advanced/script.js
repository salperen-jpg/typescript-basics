const names = ['Jack', 'John', 'Jamie'];

// console.log(names.length);
// console.log(names[names.length - 1]);

// Concat

const surnames = ['a', 'b', 'c'];

const allNames = names.concat(surnames);
// console.log(allNames);

//  Reversion

// console.log(allNames.reverse());

// UNSHIFT (FOR ADDING AN ELEMENTS AT THE BEGINNING OF ARRAY)
allNames.unshift('newest name');
// console.log(allNames);

// SHIFT( REMOVES THE FIRST ITEM )
allNames.shift();
// console.log(allNames);

// PUSH ADDS ITEM AT THE END OF THE ARRAY
allNames.push(allNames.shift());
// console.log(allNames);

// POP DELETES LAST ITEM OF THE ARRAY

// console.log(allNames.pop());
// console.log(allNames);

// SPLICE GETS SOME PART OF THE ARRAYS (PASS IN STARTING POINT AND ENDING POINTS)
// console.log(allNames);
const specificItems = allNames.splice(0, 2);
// console.log(specificItems);

const namess = ['anna', 'sussy', 'bob'];
const lastName = 'shakeandbake';

// let newArray = [];

// for (let na of namess) {
//   newArray.push(`${na} ${lastName}`);
// }

// console.log(newArray);

const lastVersion = namess.map((name) => `${name} ${lastName}`);
// console.log(lastVersion);

//  NULL VS UNDEFINED
// => NULL SMT THAT  DEVELOPERS ASSIGNED;
// => UNDEFINED THAT JS CAN NOT FIND ;

let number = 20 + null;
// console.log(number);

let number2 = 20 + undefined;
// console.log(number2);

// TRUTHY AND FALSY IN JS

//  "" ,'',``,0,-0,NaN,false,null,undefined => Falsy Others=> Truthy.

// Scoping => GLOBAL AND LOCAL

let myName = 'Salih';

console.log(myName);

function dummyFunction() {
  myName = 'Alperen';
  console.log(myName);

  (function innerFunction() {
    myName = 'abc';
    console.log(myName);
  })();
}

dummyFunction();
console.log(myName);

//  LOCAL SCOPE
//  => can not be access from outside code blocks  (functions , if else statements)

// CALLBACK FUNCTIONS , HIGH ORDER FUNCTIONS
// Functions as first class objects/ citizens which means we can store them in the variables. Function is being passed to another function

// High order functions accepts another function as an argument or returns another function as a result

// function goodMorning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }
// function goodAfternoon(name) {
//   return `Good afternoon ${name.toLowerCase()}`;
// }

// function greet(name, cb) {
//   const myName = 'SALIH';

//   console.log(`${cb(name)} my name is ${myName}`);
// }

// greet('Bobo', goodMorning);
// greet('Bobo', goodAfternoon);

// forEach => does not return array or mutate the existed array.

// const people = [
//   {
//     name: 'abc',
//     position: 'dev',
//     age: 30,
//     salary: 300,
//   },
//   {
//     name: 'def',
//     position: 'bss',
//     age: 20,
//     salary: 170,
//   },
//   {
//     name: 'klm',
//     position: 'UX',
//     age: 25,
//     salary: 400,
//   },
// ];

// DONT INVOKE THE FUNCTION YOU PASSED IN

// function myCallBack(person) {
//   console.log(person);
// }

// people.forEach(myCallBack);
// people.forEach((person) => person.age > 20 && console.log(person));

// Map

//  it returns a new array
//  it does not change the size of array
//  uses values from original array when making new one

// const newMutatedArray = people.map(function (person) {
//   return {
//     newName: person.name,
//     newPosition: `junior ${person.position}`,
//   };
// });

// console.log(newMutatedArray);

// const anotherMethod = people.map((person) => ({
//   newName: person.name,
//   newPosition: `junior ${person.position}`,
// }));

// console.log(anotherMethod);

// Filter

// Returns new array
// can manipulate the size of array according to some condition

// const youngPeople = people.filter(function (person) {
//   return person.age > 25;
// });
// console.log(youngPeople);

// FIND
// returns single instance
// returns the first match , if no match undefined
//  great for getting unique value

// const person = people.find(function (person) {
//   return person.name.startsWith('a');
// });

// console.log(person);

// REDUCE
// iterates over all array , takes callbacks
// reduces to a single value -number,array,object
// 1 parameter would be the acc - total of the calculations
// 2 paramter would be the curr - crrent iteration,value

// const total = people.reduce((acc, curr) => {
//   console.log(acc);
//   console.log(curr);
//   acc += curr.salary;
//   return acc;
// }, 0);

// console.log(total);

// CHALLENGES

const students = [
  {
    id: 1,
    name: 'peter',
    score: 80,
    favoriteSubject: 'Math',
  },
  {
    id: 2,
    name: 'susan',
    score: 99,
    favoriteSubject: 'History',
  },
  {
    id: 3,
    name: 'anna',
    score: 85,
    favoriteSubject: 'Math',
  },
  {
    id: 4,
    name: 'john',
    score: 34,
    favoriteSubject: 'art',
  },
  {
    id: 5,
    name: 'bobo',
    score: 74,
    favoriteSubject: 'history',
  },
];

// MAP

// const uptatedStudents = students.map((student) => ({
//   ...student,
//   role: 'student',
// }));

// console.log(uptatedStudents);

// FILTER

// const highScores = students.filter((student) => student.score >= 80 && student);
// console.log(highScores);

// FIND
const id = 3;

// const specItem = students.find((student) => student.id === id);

// const specItem = students.find(function (student) {
//   return student.id === id;
// });
// console.log(specItem);

// REDUCE

// const averageScore =
//   students.reduce((acc, currItem) => {
//     acc += currItem.score;

//     return acc;
//   }, 0) / students.length;

// console.log(averageScore);

// const survey = students.reduce((survey, student) => {
//   const favSub = student.favoriteSubject;
//   console.log(favSub);
//   if (survey[favSub]) {
//     survey[favSub] = survey[favSub] + 1;
//   } else {
//     survey[favSub] = 1;
//   }
//   return survey;
// }, {});

// console.log(survey);

// const maxScore = students.map((student) => student.score);

// console.log(maxScore);
// const maxNumber = Math.max(...maxScore);

// console.log(students.length);

// const randomIndex = Math.floor(Math.random() * students.length);
// console.log(randomIndex);

// const myFunc = (name) => console.log(`${name} hi there`);

// myFunc('Salih');

// const doubleVal = (val) => val * 2;

// console.log(doubleVal(5));

// const object = () => ({ name: 'Salih', age: 25 });
// const person = object();
// console.log(person);

// let firstVal = 4;
// let secondVal = 3;
// console.log(firstVal, secondVal);
// let temp = secondVal;
// secondVal = firstVal;
// firstVal = temp;

// console.log(firstVal, secondVal);

// const array = ['abc', 'def', 'adk'];
// console.log(...array);

// let a = 30;
// let b = 40;

// const temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// BUBBLE SORT ALGORITHM
const arr = [4, 3, 2, 1];

const bubbleSort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    console.log(i);
    for (let j = 0; j < len - i - 1; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        // swap them
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

bubbleSort(arr);
console.log(arr);

// console.log([1, 2, 3].slice());

// function largestOfFour(arr) {
//   let maxNumbers = [];
//   let maxNum;
//   for (let i = 0; i < arr.length; i++) {
//     maxNum = arr[i][0];
//     for (let j = 0; j < 4; j++) {
//       console.log(maxNum);
//       if (arr[i][j] > maxNum) {
//         maxNum = arr[i][j];
//       }
//     }
//     maxNumbers.push(maxNum);
//   }
//   console.log(maxNumbers);
//   return maxNumbers;
// }

// largestOfFour([
//   [17, 23, 25, 12],
//   [25, 7, 34, 48],
//   [4, -10, 18, 21],
//   [-72, -3, -17, -10],
// ]);

// function frankenSplice(arr1, arr2, n) {
//   let copyArr1 = [...arr1];
//   let copyArr2 = [...arr2];
//   let emptyArr = [copyArr2.slice(0, n), ...arr1, copyArr2.slice(n)].flat(
//     Infinity
//   );
//   return emptyArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function chunkArrayInGroups(arr, size) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += size - 1) {
//     console.log(arr);
//     console.log(i);
//     console.log(arr.slice(i, size + i - 1));
//     newArr.push(arr.slice(i, size - 1));
//   }
//   console.log(newArr);
//   return arr;
// }

// // chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

// function sumAll(arr) {
//   arr = arr.sort((a, b) => a - b);
//   console.log(arr[1], arr[0]);

//   const total = arr.reduce((total, currentItem) => {
//     for (let i = arr[0]; i <= arr[1]; i++) {
//       total += i;
//     }
//     console.log(total);
//     return total;
//   }, 0);

//   return total/2;
// }

// sumAll([1, 4]);

// const abc = [1, 2, 3, 4, 5];

// console.log(abc.splice(2));
// console.log(abc);

// function isAnObjectArray(obj) {
//   return Array.isArray(obj);
// }

// console.log(isAnObjectArray({ a: 'c' }));
// console.log(isAnObjectArray([1, 2, 43]));

// function destroyer(arr) {
//   const newArr = Object.values(arguments);
//   const [originalArr, ...rest] = newArr;

//   return originalArr.filter((val) => !rest.includes(val));
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// function myReplace(str, before, after) {
//   const strArr = str.split(' ');
//   const [wordToReplace] = strArr.filter((item) => item === before);
//   const replacement =
//     wordToReplace[0] === wordToReplace[0].toUpperCase()
//       ? after[0].toUpperCase() + after.slice(1)
//       : after[0].toLowerCase() + after.slice(1);
//   console.log(replacement);
//   return strArr.map((item) => (item === before ? replacement : item)).join(' ');
// }

// // test:
// console.log(
//   myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped')
// );

// "9534330"

// const arrayOfObjects = [
//   { name: 'Alp', job: 'dev' },
//   { job: 'IUX' },
//   { age: 27 },
//   { name: 'Alp', job: 'dev' },
// ];

// function checkArray(arr) {
//   return arr.filter((single) => single.hasOwnProperty('name'));
// }

// console.log(checkArray(arrayOfObjects));

// const result = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(result(3, 5));

// const outer = () => {
//   var secretWord = 'gym';
//   const inner = () => {
//     var secretWord = 'success';
//     console.log('Hi I am inner function ' + secretWord);
//   };
//   return inner;
// };

// console.log(outer()());

// const val = outer();
// val();

// const newBalance = (name, initialBalance) => {
//   let balance = initialBalance;

//   const showBalance = () => {
//     console.log(`${name} your initial balance is ${balance}`);
//   };
//   const deposit = (deposit) => {
//     balance += deposit;
//     showBalance();
//   };
//   const withdraw = (amount) => {
//     balance -= amount;
//     showBalance();
//   };
//   return {
//     showBalance,
//     deposit: deposit,
//     withdraw,
//   };
// };

// const salih = newBalance('Salih', 3000);
// salih.deposit(3000);
// salih.withdraw(2000);
// const alperen = newBalance('Alperen', 1000);
// const abc = newBalance('Abc', 7000);

// function displayName() {
//   var namee = 'Salih';
//   console.log(namee);
// }

// console.log(namee);
// displayName();

// const x = [1, 2, 3];
// console.log(typeof x[0]);
// x[-1] = -1;

// console.log(x[-1]);

let x = [1, 2, 3] + [4, 5, 6];
console.log(x);

function aa(cb) {
  return cb();
}

function cb() {
  return 1;
}

var res = aa(cb);
console.log(res);
