var chalk = require("chalk");

var a = chalk.red("world");
var b = chalk.blue("good");

console.log(typeof a);
console.log(typeof b);


var message = "Hello " + chalk.red("Wld") + chalk.blue("good");
console.log(message);