/*const getTotalRevenue = transactions => {
    return transactions.reduce((sum,num) => {return num.amount + sum }, 0);   
}*/
//------------------------------------------------------------------
const getTotalRevenue = transactions =>
     transactions.reduce((sum, num) => (num.amount + sum), 0);   

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);