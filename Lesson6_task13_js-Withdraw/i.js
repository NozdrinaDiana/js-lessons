function withdraw(clients, balances, client, amount) {
  let rest = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      rest = balances[i] - amount;
      if (rest > 0) {
        balances[i] = rest;
        return rest;
      } else {
        return -1;
      }
    }
  }
}


console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
//   Output: -1 (и массив balances должен быть [1400, 87, -6])