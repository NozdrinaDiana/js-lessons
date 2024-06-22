function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const reverseArr = arr.slice();
    reverseArr.reverse();
    return reverseArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));