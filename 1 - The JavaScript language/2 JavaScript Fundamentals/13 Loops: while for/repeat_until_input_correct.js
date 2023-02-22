let readline = require('readline-sync');

let num;

do {
    num = readline.question("Enter a number greater than 100: ");
} while (num <= 100 && num);