import { Commit } from "./commit";
import { CommitI } from "./domain/commit-interface";
import { GitI } from "./domain/git-interface";
import { RepositoryI } from "./domain/repository-interface";
import { Repository } from "./repository";

// Git > Repository > Branch > Commit
export class Git implements GitI {
  private HEAD: CommitI | null;
  constructor(){
    this.HEAD = null
  }
  createRepository(name: string): RepositoryI  {
    return new Repository(name);
  };
  createCommit(message: string): Commit {
    const commit = new Commit(message, this.HEAD)
    this.HEAD = commit;
    return commit
  };

  getCommitLog(): string[] {
    let commit = this.HEAD;
    const history: string[] = [];
    while(commit) {
      history.push(commit.id)
      commit = commit.parent
    }
    return history
  } 
  
}