const checkSum = arr => {
     let sumOfNumber = 0;
    if (!Array.isArray(arr)) {
        return null; 
    } 
        for (let i of arr) {
            sumOfNumber += i;
        }
    return sumOfNumber > 100;
};

console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true