import { Branch } from "./branch";
import { BranchI } from "./domain/branch-interface";
import { RepositoryI } from "./domain/repository-interface";

export class Repository implements RepositoryI {
  name: string
  branch: BranchI;
  private branches: BranchI[] | null;
  constructor(name: string) {
    this.branches = []
    this.name = name
    // When we initialize git class this should be our default branch.
    const branch = new Branch('main', null)
    this.add(branch)
    this.branch = branch;
  }
    /* Add branch into an array of branches */ 
    private add(branch: BranchI){
      this.branches?.push(branch)
    }
    /* Checkout branch  */
    checkout(name?: string): BranchI {
      if(!name){
        console.info(`Current branch: ${this.branch.name}`)
        return this.branch;
      }
      const branchIdx = this.branches?.findIndex((branch) => branch.name === name);
      /* If branch already exists changes to existing branch */ 
      if(branchIdx && branchIdx !== -1 && this.branches?.length) {
        this.branch = this.branches[branchIdx];
        console.info(`Switched to branch: ${this.branch.name}`)
        return this.branch;
      } 
      /* Create if does not exists */
      this.branch = new Branch(name, this.branch?.commit);
      this.add(this.branch)
      console.info(`Created and Switched to: ${name}`)
      return this.branch;
    }
}