
/*const getRandomNumbers = (length, from, to) => {
   from = Math.ceil(from)
   to = Math.floor(to);

  if (from > to) {
    return null;
  } 
  let arr = [];
  arr.length = length;

    kk = Math.floor(Math.random() * (to - from + 1)) + from
    let sss = arr.forEach(i => { return arr.concat(25) });
  
  return sss;
};
   

//-----------------------------
/*function getRandomNumbers(length, from, to) {
  from = Math.ceil(from)
  to = Math.floor(to);
 
  if (from > to) {
    return null;
  }
  return Array.from({length}, () => Math.floor(Math.random() * (to - from + 1)) + from);
}
//--------------------------
/*const getRandomNumbers = (length, from, to) => {
    let max = Math.floor(to);
    let min = Math.ceil(from);

    if (min > max) {
        return null;
    }
    const arr = [];
    for (let i = 0; i < length; i++) {
         arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }    
        return arr;   
};*/

const getRandomNumbers = (length, from, to) => {
  const max = Math.floor(to);
  const min = Math.ceil(from);
  if (min > max) {
    return null;
  }
  return  new Array(length).fill().map(num => Math.floor(Math.random() * (max - min + 1)) + min);
}
  
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null