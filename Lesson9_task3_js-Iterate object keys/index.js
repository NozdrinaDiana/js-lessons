function getKeys(obj) {
   Object.keys(obj).forEach(key => console.log(key));
}

getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
