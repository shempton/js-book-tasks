let readline = require('readline-sync');

function ask(question, yes, no) {
    if (readline.question(question)) yes();
    else no();
}
  
ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);