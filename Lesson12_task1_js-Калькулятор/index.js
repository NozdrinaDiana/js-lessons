const calc = str => {
    const arr = str.split(' ');
    let res;
    switch (arr[1]) {
        case '+':
            res = Number(arr[0]) + Number(arr[2]);
            break;
         case '-':
            res = arr[0] - arr[2];
            break;
         case '*':
            res = arr[0] * arr[2];
            break;
         case '/':
            res = arr[0] / arr[2];
            break;
    }
    return `${str} = ${res}`
}

console.log(calc('3 + 4'));
console.log(calc('3 - 4'));
console.log(calc('3 * 4'));
console.log(calc('3 / 4'));
console.log(calc('3 ** 4'));