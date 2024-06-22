function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    const removeDuplic = [];
    for (let i of array) {
        if (!removeDuplic.includes(i)) {
            removeDuplic.push(i);
        }
    }
    return removeDuplic;
}
console.log(removeDuplicates([1, 25, 1, 8, 25, -8, -8, 9])); // [1, 25, 8, -8, 9]


