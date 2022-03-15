const carMakers: string[] = ['dodge', 'mercedes', 'bmw'];

// Help with inference when extracting values

const firstValue = carMakers[0];
const lastValue = carMakers.pop();

// Prevent incompatible values

// carMakers.unshift(100);
// You can not add boolean ,number or others into string arrays

// You can take advantage of high other funcstions.

carMakers.map((car: string): string => {
  return car;
});

// Flexible Array Types

const importantDates: (string | Date)[] = [new Date(), '2020-10-10'];

importantDates.push(new Date());
importantDates.push('2020-10-10');
