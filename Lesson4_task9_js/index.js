let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
    sum += i;
}
const integer = Math.trunc(sum / 1234);
const modul = sum % 1234;

console.log(integer > modul);