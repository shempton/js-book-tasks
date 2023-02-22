let readline = require('readline-sync');

let input = readline.question("What is the “official” name of JavaScript? ")
if (input == 'ECMAScript'){
    console.log('Right!');
} else {
    console.log("You don't know? ECMAScript!");
}
