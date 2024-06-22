/*const sum = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    arr.reduce((s, num) => {
        return s + num
    }, 0);
}*/

//--------------------------
const sum = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
       return arr.reduce((s, num) => (s + num), 0);
}

console.log(sum([1, 2, 3, 4]));

console.log(sum(1, 2, 3, 4));