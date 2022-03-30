// for loops
const arrayOfNumbers = [];
for (let value = 10; value <= 50; value += 10) {
  console.log(value);
  arrayOfNumbers.push(value);
}

// bad usage of it
for (let index = 0; index < arrayOfNumbers.length; index++) {
  console.log(arrayOfNumbers[index]);
}
