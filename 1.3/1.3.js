const readlineSync = require("readline-sync");

let UserName = readlineSync.question("what's your name?");
console.log("his name is" + UserName);

console.log('HI ' + UserName + "!");