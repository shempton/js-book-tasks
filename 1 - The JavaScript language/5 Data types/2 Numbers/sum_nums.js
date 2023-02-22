let readline = require('readline-sync');

let a = +readline.question("Введите первое число ", 0);
let b = +readline.question("Введите второе число ", 0);

console.log( a + b );