// Tell TS the type of data type that you are ganna assing to  a variable.

let isTrue: boolean = true;

//  You can assing only that type of value later on
isTrue = false;

// String
let nameOfFood: string = 'Pizza';

// Number
let price: number = 20;

// null
let nothing: null = null;

// undefined
let createUndefined: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array

// Basically telling TS that we will have an array includes only string values.
let colors: string[] = ['red', 'green', 'blue'];

let evenDigits: number[] = [0, 2, 4, 6, 8];

// Classes

class Car {}

// Instantiate

let car: Car = new Car();

// Objecet literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumbers: (i: number) => void = (i: number) => {
  console.log(i);
};

// TYPE INFERENCE

// if decleration and initialization are on the same line TS will figure out the type of 'color' for us.

const color = 'red'; // TS will figure out that it refers to  string.

// WHEN TO USE ANNOTATIONS
//  1) when we are handling 'any' type of objects
const data = '{"x":20,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(data);
console.log(coordinates);
//  2) When we declare a variable on one line and initalizate it later

let words = ['red', 'blue', 'green'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
