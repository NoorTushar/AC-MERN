// for loop, multiplication table of 10

/**
    for (let i = 1; i <= 10; i++) {
        console.log(i * 10);
    }
 */

// let our number be n
// if n = 4

/*
    for (let i = 1; i <= 10; i++) {
        console.log(i * 4);
    }
*/

const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

rl.question("What is your the number you want? ", (n) => {
   for (let i = 1; i <= 10; i++) {
      console.log(i * n);
   }
   rl.close();
});
