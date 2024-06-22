function buildObject(keysList, valuesList) {
    const sumObject = {};

   for (let i = 0; i < keysList.length; i += 1) { 
            sumObject[keysList[i]] = valuesList[i];
    }
    return sumObject;
}

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(result);