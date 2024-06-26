function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    } else {
        const newSquareArray = [];
        for (let i of arr) {
            i *= i;
            newSquareArray.push(i);
        }
        return newSquareArray;
    }
}

console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
console.log(squareArray((22, 44)));
