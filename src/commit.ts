import { CommitI } from "./domain/commit-interface";
import sha1 from 'sha1'
import { BranchI } from "./domain/branch-interface";
export class Commit implements CommitI {
  readonly id: string
  parent: CommitI | null
  message: string
  constructor(message: string, parent: CommitI | null){
    this.id = sha1(message)
    this.message = message
    this.parent = parent
  }
  
  getCommitLog(): string[] {
    let commitAux: CommitI | null = this;
    const history: string[] = [];
    while(commitAux) {
      history.push(commitAux.id)
      commitAux = commitAux.parent
    } 
    return history
  }  
}