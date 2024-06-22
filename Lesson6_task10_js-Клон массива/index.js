/*function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const newArr = arr.slice();
    return newArr;
}*/
function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(cloneArr([1, 2, 3, 4, 5]));