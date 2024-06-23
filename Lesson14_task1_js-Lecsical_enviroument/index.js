'use strict';

let message = 'Just learn it';

export const sendMessage = name => {
    console.log(`${name}, ${message}! Your Gromcode`);
}

export const setMessage = (newMessage) => {
    message = newMessage;
}

sendMessage('Ann');

setMessage('Good job');

sendMessage('Ann');