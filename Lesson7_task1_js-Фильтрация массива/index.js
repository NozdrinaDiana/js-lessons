function getSpecialNumbers(arr) {
    const filterArr = [];
    
    arr.forEach(function (i) {
        if (i % 3 === 0) {
            filterArr.push(i);
    }
});
    return filterArr;
}
console.log(getSpecialNumbers([2, 22, 33, 5, 333, 0, -3, -5]));