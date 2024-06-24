'use strict';

let message = 'Just learn it';

export function sendMessage(name) {
  console.log(`${name}, ${message}! Your Gromcode`);
}

export function setMessage(newMessage) {
  message = newMessage;
}

/*sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');*/