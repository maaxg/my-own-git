console.info('> Beat - Version: 0.0.0.1');
console.info('> Ctrl + C to close');
var readline = require("readline");
var rl = readline.createInterface({
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
var readCommand = function () {
    rl.question('beat> ', function (command) {
        console.log(command);
        readCommand();
    });
};
readCommand();
