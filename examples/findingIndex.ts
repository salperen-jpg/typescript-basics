type IdDisplay = {
  id: string;
  message: string;
};

const myList: IdDisplay[] = [
  {
    id: 'foo',
    message: 'I am foo',
  },
  {
    id: 'fee',
    message: 'I am fee',
  },
];

const fooIndex = myList.map((i) => i.id).indexOf('foo');
console.log(fooIndex);

// Any object in JS(functions,arrays,regexp) are reference type.

const foo = {};
const bar = foo;
const baz = {};

console.log(foo === bar);
console.log(foo === baz);
console.log('');
// NULL VS UNDEFINED

/*

Something hasnot been initialized : undefined,
Something is currenetly unavailable null

*/

console.log(null == null); /* Returns true; */
console.log(undefined == undefined); /* Returns true;*/
console.log(undefined == null); /* Returns true;*/

//  Recommended way of checking null is  checking  something == null . It is more conventional and shorter.

const returnValue = (a: number, b?: number) => {
  // if smt
  return { a: 1, b: 2 };
  // else
  return { a: 1 };
};

const term = JSON.stringify({ willStay: null, willBeGone: undefined }); // {"willStay":null}
console.log(term);

console.log('*****************');

// NAN
// JS has a special value type which is NAN used some calculation is not representable by number
// NAN === NAN returns false
// number.isNaN(NaN);

// 1/0 Infinity
// -1/0 Infinity
