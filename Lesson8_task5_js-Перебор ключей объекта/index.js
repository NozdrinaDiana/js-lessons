
function getKeys(obj) {
    for (let key in obj) {
    console.log(key);
 }
}
const object = {
    a: 'A',
    b: 'B',
    c: 'C',
};
//console.log(object);
getKeys(object);