/*const flatArray = arr => 
     arr.reduce((acc, num) => {
       return acc.concat(num);
    }, []).sort((a, b) => a-b);
*/

//-------------------------------------------------------
const flatArray = arr => arr.flat().sort((a, b) => a - b);


console.log(flatArray([5, [2, 3, 1, 2], 3, [2, 5]]));