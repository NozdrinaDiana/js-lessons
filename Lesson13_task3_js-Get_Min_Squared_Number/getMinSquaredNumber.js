export default (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    };
    let min = Infinity;
    arr.forEach(num => {
        if (Math.abs(num) < min) {
            min = Math.abs(num) * Math.abs(num);
        }
        });
    return min;
}

/*console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
console.log(getMinSquaredNumber(22));
console.log(getMinSquaredNumber('hjdhjdfh'));
console.log(getMinSquaredNumber([]));*/