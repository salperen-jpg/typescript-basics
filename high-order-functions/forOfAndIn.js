const numbers = [10, 20, 30, 40, 50];

// If you are to work with indexes you should be using for in
for (const index in numbers) {
  console.log(index);
  console.log(numbers[index]);
}

// for of
// It just loop through all array
for (const value of numbers) {
  console.log(value);
}
