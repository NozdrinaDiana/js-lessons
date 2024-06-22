const n = 10;
let sum = 1;
let i = 2;
while (i <= n) {
    sum += String(i);
    i++;
}
console.log(sum);
console.log(typeof (sum));