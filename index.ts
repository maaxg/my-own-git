console.info('> Beat - Version: 0.0.0.1')
console.info('> Ctrl + C to close')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
 */

const readCommand = () => {
  rl.question('beat> ', (command) => {
    console.log(command)
    readCommand()
  })
}


readCommand()