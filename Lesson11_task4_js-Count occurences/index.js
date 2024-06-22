/*const countOccurrences = (text, str) => {
    let sum = 0
    for (let i = 0; i < text.length; i++) {
        if (text.match('dg')) {
            sum += 1;
        }; 
    }
 
    return sum;
}*/

const countOccurrences = (text, str) => {
    if (str === '') {
        return null;
    }
    return text.split(str).length - 1;
};

console.log(countOccurrences('agdgdfkmvjj hfhfjfj dndndnndydgvm', 'dg'));
console.log(countOccurrences('agdgdfkmvjj hfhfjfj dndndnndydgvm', 'dn'));
console.log(countOccurrences( 'паоаа', ''));
console.log(countOccurrences('agdgdfkmvjj hfhfjfj dndndnndydgvm'));