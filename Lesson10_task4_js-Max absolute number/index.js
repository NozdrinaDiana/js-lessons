/*const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let max = -Infinity;
    arr.forEach(num => {
        if (Math.abs(num) > max) {
            max = Math.abs(num);
        }
    })
    return max;
};*/
//---------------------------------------------
const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    const absolute = arr.map(num => Math.abs(num));
    const max = Math.max(...absolute);
    return max;
};

console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([]));
console.log(getMaxAbsoluteNumber(25));