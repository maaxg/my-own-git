console.info('> Quati - Version: 0.0.0.1')
console.info('> Ctrl + C to close')
import * as readline from 'readline'
import { syntaxValidator } from './syntax-validation';
import {Git} from './src/'
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
  const git = new Git()
  rl.question('quati> ', (command: string) => {
    syntaxValidator(command, git)
    readCommand()
  })
}


readCommand()