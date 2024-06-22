function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let quantity = 0;
    const removeDuplic = [];
    for (let i of array) {
        if (!removeDuplic.includes(i)) {
            removeDuplic.push(i);
            quantity += 1;
        }
    }
    return quantity;
}
console.log(uniqueCount([1, 25, 1, 8, 25, -8, -8, 9]));//5