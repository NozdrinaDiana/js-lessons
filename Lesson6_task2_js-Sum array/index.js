function getSum(arr) {
    let sumNumbers = 0;
    if (Array.isArray(arr)) {
        for (let i of arr) {
            sumNumbers += i;
        }
    } else {
        return null;
        }
        return sumNumbers;    
    
}
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null