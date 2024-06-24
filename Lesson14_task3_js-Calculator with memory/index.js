let memory = 0;

export const add = num => memory += num; 

export const decrease = num => memory -= num; 

export const reset = () => memory = 0;

export const getMemo = () => memory;

console.log(add(25));
console.log(decrease(5));
console.log(getMemo());
console.log(reset());