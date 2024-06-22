const pickProps = (obj, props) => {
    const newObj = {};
    for (let key in obj) {
        props.forEach(index => {
            if (index === key) {
                newObj[key] = obj[key];
            };})
        }    
    return newObj;
};


console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['d', 'hex']));
