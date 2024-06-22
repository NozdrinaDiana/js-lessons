const nameOfStudents = {
    name_1: 'Vasya',
    name_2: 'Kolya',
    name_3: 'Petya',
}

const copyObj = obj =>
    Object.assign({}, obj);

console.log(copyObj(nameOfStudents));
console.log(nameOfStudents === copyObj);