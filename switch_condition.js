const prompt = require('prompt-sync')();
let name = prompt("Enter your favourite flowers : ");
switch(name){
    case "rose":
        console.log("Roses are red");
        break;
    case "sunflower":
        console.log("Sunflowers are yewllow");
        break;
    case "lavender":
        console.log("Lavenders are violet");
        break;
    default:
        console.log("Please choose another flower");
}