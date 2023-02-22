let readline = require('readline-sync');

function checkAge(age) {
    return (age > 18) ? true : readline.question('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || readline.question('Did parents allow you?');
}