const getSubArray = (arr, numberOfElements) => {
    const newArray = [];
    for (let i = 0; i < numberOfElements; i += 1) {
        newArray.push(arr[i]);
    }
    return newArray;
};

console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 3));

// **Пример работы:**
// Input: getSubArray([11, 4, 8, 3], 2)
// Output: [11, 4]

// Input: getSubArray([1, 2, 3, 4, 5], 3)
// Output: [1, 2, 3]