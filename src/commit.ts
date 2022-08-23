import { CommitI } from "./domain/commit-interface";
import sha1 from 'sha1'
export class Commit implements CommitI {
  readonly id: string
  parent: CommitI | null
  message: string
  content: string
  constructor(message: string, parent: CommitI | null, content: string){
    this.id = sha1(content)
    this.message = message
    this.parent = parent
    this.content = content
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