const readlineSync = require("readline-sync");

let UserName = readlineSync.question("what's your name?");
console.log("his name is" + UserName);

let UserFirstName = readlineSync.question("what's your First name?");
console.log("his  first name is" + UserFirstName);

let city = readlineSync.question("where do you come from?");
console.log("his city is" + city);

