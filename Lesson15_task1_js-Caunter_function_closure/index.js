export const makeCounter = () => {
  let counter = 0;
  return function () {
    return counter++;
  }
}; 

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());