const readlineSync = require("readline-sync");

let age = 17;
console.log("My age is " + age);


if(age >= 18) {
    console.log("Vous êtes adulte");
}

else{
    console.log("vous n'êtes pas encore adulte");
}