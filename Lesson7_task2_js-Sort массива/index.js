//сортировка массива по убыванию

/*const sortDesc = arr => {
    arr.sort(let aaa = (a, b) => b - a);
}

//------------------------------------------
const sortDesc = arr => {
    function AAA(a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    }
    arr.sort(AAA);
    return arr;
}
//-----------------------------------------
const sortDesc = arr => {
    const sortArr = arr.slice();
    function AAA(a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    }
    arr.sort(AAA);
    return arr;
}
//---------------------------------------------
const sortDesc = arr => {
    const sortArr = arr.slice();
    function AAA(a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    }
    sortArr.sort(AAA);
    return sortArr;
}
//--------------------------------------------
const sortDesc = arr => {
    const sortArr = arr.slice();
    return sortArr.sort((a,b) => b-a);
}*/
//------------------------------------------
const sortDesc = arr => 
    arr.slice().sort((a, b) => b - a);


console.log(sortDesc([1, 2, 3, 4, 5]));
console.log(sortDesc([1, -2, 3, -4, 5]));
console.log(sortDesc([1, 0, 33, -1, -5]));