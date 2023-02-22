let readline = require('readline-sync');

let calculator = {
    sum() {
        return this.a + this.b;
    },
  
    mul() {
        return this.a * this.b;
    },
  
    read() {
        this.a = +readline.question('a? ');
        this.b = +readline.question('b? ');
    }
};
  
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );