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

const startsProperly = (value: string): boolean => {
  const splitted = value.split(' ')
  if(!value.startsWith("qti")) {
    console.error("\x1b[31mInvalid command:\x1b[0m start with 'qti'")
    return false;
  }
  if(splitted.length === 1){
    console.error("\x1b[31mInvalid command:\x1b[0m please use 'qti' with other avaliable commands: ", VALID_VALUES)
    return false;
  }
  return true;
}

const isCheckoutValid = (value: string, git: GitI, splittedValue: string[]): boolean | void=> {
  if(value.includes("checkout") && !VALID_VALUES.includes(splittedValue[2])) {
    const branchName = splittedValue[2]
    git.checkout(branchName);
    return true;
  }
  if(value.includes("checkout") && splittedValue.length === 2){
    git.checkout();
    return true;
  }
}
const isBranchCommandValid = (value: string, git: GitI, splittedValue: string[]): boolean | void => {
  if(value.includes("branch") && value.includes("-m") && !VALID_VALUES.includes(splittedValue[3])) {
    const branchName = splittedValue[3]
    git.checkout(branchName);
    return true;
  }
}

const isLogCommandValid = (value: string, git: GitI, splittedValue: string[]): boolean | void  => {
  if(value.includes("log") && splittedValue.length === 2){
    const history = git.branch.commit?.getCommitLog()
    if(!history?.length) {
      console.info("Make a commit first!")
      return true;
    }
    console.info("\x1b[42mCommit history: \x1b[0m\n", history)
    return true;
  }
}

const isCommitCommandValid = (value: string, git: GitI, splittedValue: string[]): boolean | void => {
  if(value.includes("commit") && value.includes("-m") && !VALID_VALUES.includes(splittedValue[3])){
    const commitMessage = splittedValue[3]
    git.branch.commit = new Commit(commitMessage, git.branch.commit)
    return true;
  }
}

const isAddCommandValid = (value: string, git: GitI, splittedValue: string[]): boolean | void => {
  if(value.includes("add") && splittedValue.length === 3 && !VALID_VALUES.includes(splittedValue[2])) {
    git.stageFile(splittedValue[2])
    return;
  } else {
    console.error("\x1b[31mInvalid command:\x1b[0m 'add' must be followed by file path")
    return;
  }
}

export const syntaxValidator = (value: string, git: GitI) => {
  if(!startsProperly(value)) return;
  const splitted = value.split(' ')
  if(isCheckoutValid(value, git, splitted)) return;
  if(isBranchCommandValid(value, git, splitted)) return;
  if(isLogCommandValid(value, git, splitted)) return;
  if(isCommitCommandValid(value, git, splitted)) return;
  if(isAddCommandValid(value, git, splitted)) return;
} 