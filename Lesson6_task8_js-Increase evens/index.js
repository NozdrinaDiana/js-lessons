const increaseEvenEl = (arr, delta) => {
    const evenElArr = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i of arr) {
        if (i % 2 === 0) {
            i += delta;        
        }
        evenElArr.push(i);
    }
    return evenElArr;
};


console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []