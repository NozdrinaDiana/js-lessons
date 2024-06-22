
/*function getSpecialNumbers(arr) {
    let filterArr = [];
    for (let i of arr) {
        if (i % 3 === 0) {
         filterArr.push(i);
        }        
    }
    return filterArr;
}
 //----------------------------------------
function getSpecialNumbers(arr) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
}
 //-------------------------------------------
const getSpecialNumbers = arr => {
    let filterArr = [];
    const checkSpecialNumbers = i => {
        if (i % 3 === 0) {
            filterArr.push(i);
        }
    }
    arr.forEach(checkSpecialNumbers);
    return filterArr;
}   
//-----------------------------------------
function getSpecialNumbers(arr) {
    let filterArr = [];
    arr.forEach(i => {
        if (i % 3 === 0) {
            filterArr.push(i);
        }
    });
    return filterArr;
}
//---------------------------------------------
const getSpecialNumbers = arr => {
    let filterArr = [];
    arr.forEach(function checkSpecialNumbers(i) {
        if (i % 3 === 0) {
            filterArr.push(i);
        }
    });
    return filterArr;
};
//---------------------------------------
const getSpecialNumbers = arr => {
    let filterArr = [];
    arr.forEach(function (i) {
        if (i % 3 === 0) {
            filterArr.push(i);
        }
    });
    return filterArr;
};
//-----------------------------------------------
const getSpecialNumbers = arr => {
    let filterArr = [];
    arr.forEach(i  => {
        if (i % 3 === 0) {
            filterArr.push(i); 
        }
    });
    return filterArr;
};
//------------------------------------------
//                  filter
const getSpecialNumbers = arr => {
    const result = arr.filter(i => {
        if (i % 3 === 0) {
            return true;
        }
        return false;
    });
    return result;
}; 
//------------------------------------------
const getSpecialNumbers = arr => {
    const result = arr.filter(i => {
        return i % 3 === 0 ? true : false;
    });
    return result;
};
//-----------------------------------------------
 const getSpecialNumbers = arr => {
    const result = arr.filter(i => {
        return i % 3 === 0 ;
    });
    return result;
};
//----------------------------------------------
 const getSpecialNumbers = arr => {
    const result = arr.filter(i => i % 3 === 0 );
    return result;
};
//---------------------------------------------------
const getSpecialNumbers = arr => {
   return  arr.filter(i => i % 3 === 0 );
};*/
//----------------------------------------------------
const getSpecialNumbers = arr =>
    arr.filter(i => i % 3 === 0);


console.log(getSpecialNumbers([2, 22, 33, 5, 333, 0, -3, -5]));
