let readline = require('readline-sync');

let userName = readline.question("Who's there? ");

if (userName === 'Admin') {

    let pass = readline.question('Password? ');

    if (pass === 'TheMaster') {
        console.log( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        console.log( 'Canceled' );
    } else {
        console.log( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    console.log( 'Canceled' );
} else {
    console.log( "I don't know you" );
}