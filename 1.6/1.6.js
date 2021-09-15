const readlineSync = require("readline-sync");

let numbers = readlineSync.question('Can you give me two numbers ?');
console.log( numbers + "10 and 20");

console.log('10' / '20');