let readline = require('readline-sync');

function readNumber() {
    let num;
  
    do {
        num = readline.question("Enter a number please? ", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}

console.log(`Read: ${readNumber()}`);