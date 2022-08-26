import { Commit } from "./src/commit";
import { GitI } from "./src/domain/git-interface";


const VALID_VALUES = [
  "qti",
  "add",
  "-m",
  "log",
  "commit",
  "branch",
  "checkout"
]

export const syntaxValidator = (value: string, git: GitI) => {
  if(!value.startsWith("qti")) {
    console.error("\x1b[31mInvalid command:\x1b[0m start with 'qti'")
    return;
  }
  const splitted = value.split(' ')
  if(splitted.length === 1){
    console.error("\x1b[31mInvalid command:\x1b[0m please use 'qti' with other avaliable commands: ", VALID_VALUES)
    return;
  }
  if(value.includes("checkout") && !VALID_VALUES.includes(splitted[2])) {
    const branchName = splitted[2]
    git.repository.checkout(branchName);
    return;
  }
  if(value.includes("checkout") && splitted.length === 2){
    git.repository.checkout();
    return;
  }
  if(value.includes("branch") && value.includes("-m") && !VALID_VALUES.includes(splitted[3])) {
      const branchName = splitted[3]
      git.repository.checkout(branchName);
      return;
  }
  if(value.includes("log") && splitted.length === 2){
    const history = git.repository.branch.commit?.getCommitLog()
    if(!history?.length) {
      console.info("Make a commit first!")
      return;
    }
    console.info("\x1b[42mCommit history: \x1b[0m\n", history)
    return;
  }
  if(value.includes("commit") && value.includes("-m") && !VALID_VALUES.includes(splitted[3])){
    const commitMessage = splitted[3]
    git.repository.branch.commit = new Commit(commitMessage, git.repository.branch.commit)
    return;
  }
  if(value.includes("add") && splitted.length === 3 && !VALID_VALUES.includes(splitted[2])) {
    git.add(splitted[2])
    return;
  } else {
    console.error("\x1b[31mInvalid command:\x1b[0m 'add' must be followed by file path")
    return;
  }

} 