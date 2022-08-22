import { CommitI } from "./domain/commit-interface";
import sha1 from 'sha1'
export class Commit implements CommitI {
  readonly id: string
  parent: CommitI | null
  message: string
  constructor(message: string, parent: CommitI | null){
    this.message = message
    this.id = sha1(message)
    this.parent = parent
  }
}