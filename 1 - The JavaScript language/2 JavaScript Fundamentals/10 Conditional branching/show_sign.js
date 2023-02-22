let readline = require('readline-sync');

let value = readline.question('Type a number ');

if (value > 0) {
    console.log( 1 );
} else if (value < 0) {
    console.log( -1 );
} else {
    console.log( 0 );
}