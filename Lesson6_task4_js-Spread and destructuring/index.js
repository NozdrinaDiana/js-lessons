
function swap(numbers) {
    const [a, ...arr] = numbers;
    return [...arr, a];
}

function swapManual(numbers) {
    const newNumbers = [];
    for (let i = 1; i < numbers.length; i++) {
        newNumbers.push(numbers[i]);
    }
    newNumbers.push(numbers[0]);
    return newNumbers;
}

console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]