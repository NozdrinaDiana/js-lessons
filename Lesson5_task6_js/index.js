function increaser(a, index) {
    if (a > index) {
        a += index;
    }
    return a;
}
console.log(increaser(2, 4));
console.log(increaser(5, 4));