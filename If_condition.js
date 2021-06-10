const prompt = require('prompt-sync')();
let age = prompt("Please enter your age: ");
if (age<=10){
    console.log("Hello kids");
}
else if(age<50){
    console.log("Hello");
}
else if(75<=age===100){
    console.log("Hello, how are you?");
}
else{
    console.log("have a nice day");
}
