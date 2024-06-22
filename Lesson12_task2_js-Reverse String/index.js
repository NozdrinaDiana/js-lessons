/* ALGO:
1. str -> [];
2. [] -> revers [];
3. revers [] -> str
*/
const reverseString = str => {
    if (typeof str !== 'string') {
        return null;
    }
   return str.split('').reverse().join('');
}

console.log(reverseString('abcdefghij'));
console.log(reverseString(25));