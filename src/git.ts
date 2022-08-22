import { Branch } from "./branch";
import { Commit } from "./commit";
import { BranchI } from "./domain/branch-interface";
import { CommitI } from "./domain/commit-interface";
import { GitI } from "./domain/git-interface";
import { RepositoryI } from "./domain/repository-interface";
import { Repository } from "./repository";

// Git > Repository > Branch > Commit
export class Git implements GitI {
  private HEAD: BranchI;
  private branches: BranchI[]
  constructor(){
    this.branches = []
    // When we initialize git class this should be our default branch.
    const branch = new Branch('main', null)
    this.branches.push(branch);
    this.HEAD = branch
  }
  createRepository(name: string): RepositoryI  {
    return new Repository(name);
  };
  createCommit(message: string): Commit {
    const commit = new Commit(message, this.HEAD.commit)
    this.HEAD.commit = commit;
    return commit
  };

  checkoutBranch(name?: string): BranchI {
    if(!name){
      console.info(`Current branch: ${this.HEAD.name}`)
      return this.HEAD;
    }
    const branchIdx = this.branches.findIndex((branch) => branch.name === name);
    /* If branch already exists changes to existing branch */ 
    if(branchIdx !== -1) {
      this.HEAD = this.branches[branchIdx];
      return this.HEAD;
    } 
    /* Create if does not exists */
    this.HEAD = new Branch(name, this.HEAD.commit);
    console.info(`Created and Switched to: ${name}`)
    this.branches.push(this.HEAD)
    return this.HEAD;
    
  }

  getCommitLog(): string[] {
    let commit = this.HEAD.commit;
    const history: string[] = [];
    while(commit) {
      history.push(commit.id)
      commit = commit.parent
    }
    return history
  } 
  
}