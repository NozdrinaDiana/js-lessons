function findDivCount(a, b, n) {
    let sumNumbers = 0;
    for (let i = a; i <= b; i += 1) {
        if (i % n === 0) {
            sumNumbers += 1;
        }
    }
    return sumNumbers;
}
console.log(findDivCount(2, 20, 5)); //4
console.log(findDivCount(2, 20, 4)); //5