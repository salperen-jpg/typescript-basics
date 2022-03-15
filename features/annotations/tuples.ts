const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// Type Alias
type Drink = [string, boolean, number];
// Normal
const pepsi: [string, boolean, number] = ['brown', true, 40];

// alias
const tea: Drink = ['black', false, 0];
