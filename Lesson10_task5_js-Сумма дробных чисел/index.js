/*const getTotalPrice = arr => {
    let sum = arr.reduce((sum, num) => sum + num, 0);
   let sum2 =    Math.floor(sum * 100) / 100;
    return `$${sum2}`;
}*/
//----------------------------------------------------
const getTotalPrice = arr => {
    let sum = arr.reduce((sum, num) => sum + num, 0);
    return `$${Math.floor(sum * 100) / 100}`;
}
console.log(getTotalPrice([1, 25.3, 5.888888, -10.222]));