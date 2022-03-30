const numbers = [1, 2, 3, 4, 5];

// You can not break the loop when you use forEach.

numbers.forEach((value) => console.log(value));

// IT IS NOT  COMPTATIBLE WITH ASYCN AWAIT. !!!

function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 2000);
  });
}
const ids = [10, 20, 30];

for (const id of ids) {
  await getById(id);
}
