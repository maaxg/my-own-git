import { AddI } from "./domain/add-interface";
import * as fs from 'fs'
export class Add implements AddI {
  private dbPath: string
  constructor(dbPath?: string) {
    this.dbPath = dbPath || './store.txt'
  }
  stageFile(path: string): boolean {
    if(fs.existsSync(path)) {
      try{
        fs.writeFileSync(this.dbPath, path);
        return true;
      }catch(error){
        console.error('Error on add', error)
        return false;
      }
    }
    return false;
  }
  stagedFiles(): string {
    return fs.readFileSync(this.dbPath, {encoding: 'utf8'})
  }
}