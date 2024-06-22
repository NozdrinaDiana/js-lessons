/*const sortContacts = (contacts, direction = true) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const sortArr = contacts.slice().sort((a, b) => {
        if (direction) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name)
        };
    });
    return sortArr;
}*/

const sortContacts = (contacts, direction = true) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const sortArr = contacts.slice().sort((a, b) => {
        return direction ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    return sortArr;
}

const contactsList = [
    { name: 'Tom', phonoNumber: '777-77-77' },
    { name: 'Ann', phonoNumber: '777-77-76' },
    { name: 'Vasya', phonoNumber: '777-77-75' },
    { name: 'Vlad', phonoNumber: '777-77-74' },
    { name: 'Diana', phonoNumber: '777-77-73' },
    { name: 'Andrey', phonoNumber: '777-77-72' },  
]

console.log(sortContacts(contactsList, true));
console.log(sortContacts(contactsList, false));
console.log(sortContacts(contactsList));
console.log(sortContacts(22));
