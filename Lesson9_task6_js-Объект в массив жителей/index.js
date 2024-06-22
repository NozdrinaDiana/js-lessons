/*const getPeople = obj => {
    let nnn = Object.values(obj);
    let kk = [].concat(...nnn);
    let bb = kk.map(i => 
       i.name
    );
    return bb;
}*/

//-----------------------------------------
const getPeople = obj => 
     Object.values(obj).flat().map(i => i.name);     


const rooms = {
    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' },
        { name: 'Vasyl' },
    ],
    room2: [
        { name: 'Dan' },
    ],
    room3: [
        { name: 'Denis' },
        { name: 'Max' },
        { name: 'Alex' },
    ],
};

console.log(getPeople(rooms));