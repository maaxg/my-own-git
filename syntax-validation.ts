import { GitI } from "./src/domain/git-interface";


const VALID_VALUES = [
  "qti",
  "add",
  "-m",
  "log",
  "commit"
]

export const syntaxValidator = (value: string, git: GitI) => {
  if(!value.startsWith("qti")) {
    console.error("\x1b[31mInvalid command:\x1b[0m start with 'qti'")
    return;
  }
  const splitted = value.split(' ')
  if(value.includes("add") && splitted.length === 3 && !VALID_VALUES.includes(splitted[2])) {
    git.add(splitted[2])
    // onValidateCommand()
  } else {
    console.error("\x1b[31mInvalid command:\x1b[0m 'add' must be followed by file path")
    return;
  }

} 