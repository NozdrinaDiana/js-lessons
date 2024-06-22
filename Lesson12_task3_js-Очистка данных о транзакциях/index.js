/* ALGO:
1. [] -> copy[]
2. filter copy[] -> delete not Numbers
3. copy[] -> to Numbers
4. add or  delete decimals


const cleanTransactionsList = arr => {
    const newArr = arr.slice().filter(value => Number(value)).map(value => `$${Number(value).toFixed(2)}`);
    return newArr;
}

*/
const cleanTransactionsList = arr => 
     arr.slice().filter(value => Number(value)).map(value => `$${Number(value).toFixed(2)}`);

console.log(cleanTransactionsList(['     1.9  ', '16.422222', 17, '1 dollar', 'hshsj 24']));