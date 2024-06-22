const objectAge = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}
/*
const getAdults = obj => {
    const age = Object.entries(obj);
    const age2 = age.filter(age => age[1] >= 18);   
    const sortedObjectAge = age2.map(user => user[0]);
    return sortedObjectAge;
}*/

//-----------------------------------------------
const getAdults = obj => 
    Object.entries(obj).
        filter(age => age[1] >= 18).
        map(user => user[0]);

console.log(getAdults(objectAge));