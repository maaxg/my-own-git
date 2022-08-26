console.info('> Quati - Version: 0.0.0.1')
console.info('> Ctrl + C to close')
import * as readline from 'readline'
import { syntaxValidator } from './syntax-validation';
import {Git} from './src/'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const git = new Git()

const readCommand = () => {
  rl.question('quati> ', (command: string) => {
    syntaxValidator(command, git)
    readCommand()
  })
}
rl.on("close", function() {
  console.log("\nSee you space cowboy");
  process.exit(0);
});



readCommand()