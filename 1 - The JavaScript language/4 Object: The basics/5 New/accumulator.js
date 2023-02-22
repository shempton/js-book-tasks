let readline = require('readline-sync');

function Accumulator(startValue) {
    this.value = startValue;
  
    this.read = function() {
        this.value += +readline.question('How much to add? ');
    };
  
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);