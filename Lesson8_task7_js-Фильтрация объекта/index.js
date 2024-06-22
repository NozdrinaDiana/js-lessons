const getAdults = obj => {
    const notYoungArray = {};
    for (let name in obj) {
        if (obj[name] >= 18) {
            notYoungArray[name] = obj[name];
        }
    } return notYoungArray;
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
console.log(getAdults({ Anni: 6, Andrey: 7 }));
