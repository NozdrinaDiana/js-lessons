/*const cloneArr = arr => {
    if (!Array.isArray(arr)) {
    return null;
    }
    const  sss =  [...arr];
    return sss;

}*/
//-----------------------------------
const cloneArr = arr => {
    if (!Array.isArray(arr)) {
    return null;
    }
    return  [...arr];   
}

console.log(cloneArr([25, 14, 0]));