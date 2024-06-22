function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sumMaxMin = 0;
    let max = -Infinity;
    let min = +Infinity;
    for (let i of arr) {
        if (i > max) {
            max = i;
        } else if (i < min) {
            min = i;
        }
       
    }
    sumMaxMin = max + min;
    console.log(max);
    console.log(min);
     console.log(sumMaxMin);
     return sumMaxMin > 1000;
}

console.log(checker([-2, 22, -4, 5000]));