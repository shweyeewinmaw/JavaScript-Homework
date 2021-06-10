const prompt = require('prompt-sync')();
let petName = prompt("Enter your pet name : ");
let petType = prompt("Enter your pet type : ");
let petAge = prompt("Enter your pet age :")
function pet(name,type,age){
    console.log("Name : ",name);
    console.log("Type :", type);
    console.log("Age : ",age);
}
pet(petName,petType,petAge);