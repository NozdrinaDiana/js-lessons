function withdraw(clients, balances, client, amount) {
    let rest = 0;
    for (let i of clients) {
        for (let b of balances)
            if (clients[i] === client) { 
                b = i;
                rest = balances[b] - amount;
    }
    } return rest;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
//   Output: -1 (и массив balances должен быть [1400, 87, -6])