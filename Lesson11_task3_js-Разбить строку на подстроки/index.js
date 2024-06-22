const splitString = (text, len = 10) => {
    if (typeof text !== 'string') {
        return null;
    }
    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
           }
        strArr.push(chunk);
        startPosition += len;
    } 
    const lastStr = strArr[strArr.length - 1];
    if (lastStr.length < len) {
        let end = ".".repeat(len - lastStr.length);
        strArr[strArr.length - 1] = lastStr + end;
    } 
    return strArr;       
}

console.log(splitString('abcd efghijkfffffff', 4));
console.log(splitString(122, 4));
console.log(splitString('abcd efghijkbbbbbbvfffff'));