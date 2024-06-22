

const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
     return arr.map(i => {
        if (i % 2 === 0)
            return i + delta;
        else return i;
    });   
}

console.log(increaseEvenEl([5, 2, 3, 1, -2, 0],10));
console.log(increaseEvenEl(5, 2, -2, 0),10);
