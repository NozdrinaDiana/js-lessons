/*const arrAverage = arr => {
    if (!Array.isArray) {
        return null;
    }
    const n = arr.reduce((sum, num) => (sum + num), 0);
     return n / arr.length;
}*/
//------------------------------------------------------
const arrAverage = arr => {
    if (!Array.isArray) {
        return null;
    }
    return arr.reduce((sum, num) => (sum + num), 0) / arr.length;
}

console.log(arrAverage([1, 2, 3, 4])); //2.5
console.log(arrAverage([1, -2, -3, 4]));//0
console.log(arrAverage([1, -2, 3, -4]));//-0.5 