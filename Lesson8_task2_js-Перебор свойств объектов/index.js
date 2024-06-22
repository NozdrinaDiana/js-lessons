const concatProps = obj => {
    let arr = [];
    for (let i in obj) {
       // arr.push(obj[i]);  
       arr = arr.concat(obj[i]);
    }
    return arr;
};


console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
console.log(concatProps({}));
