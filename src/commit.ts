import { CommitI } from "./domain/commit-interface";
import sha1 from 'sha1'
import * as fs from 'fs'

export class Commit implements CommitI {
  readonly id: string
  parent: CommitI | null
  message: string
  content: string
  constructor(message: string, parent: CommitI | null){
    this.message = message
    this.parent = parent
    this.content = this.getStore()
    this.id = sha1(this.content)
    this.clearStore()
  }

  private clearStore(): void{
    fs.writeFileSync(`${__dirname}/../store.txt` , '');
  }
  private getStore(): string {
    const readed = fs.readFileSync(`${__dirname}/../store.txt`, {encoding: 'utf-8'})
    return readed;
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