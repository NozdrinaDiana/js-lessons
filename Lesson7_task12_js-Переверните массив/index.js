/*const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let reverseArr = arr.slice();
    reverseArr.reverse();
    return reverseArr;
}*/

const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const reverseArr = arr.slice().reverse();
    return reverseArr;
}

console.log(reverseArray([25, 1, -2, 3, 0, -4]));
console.log(reverseArray(25, 1, -2, 3, 0, -4));