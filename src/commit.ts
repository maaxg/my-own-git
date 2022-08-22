import { CommitI } from "./domain/commit-interface";
import sha1 from 'sha1'
export class Commit implements CommitI {
  readonly id: string
  message: string
  constructor(message: string){
    this.message = message
    this.id = sha1(message)
  }
}