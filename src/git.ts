import { Commit } from "./commit";
import { GitI } from "./domain/git-interface";
import { RepositoryI } from "./domain/repository-interface";
import { Repository } from "./repository";

// Git > Repository > Branch > Commit
export class Git implements GitI {
  private readonly history: string[];
  constructor() {
    this.history = []
  }
  createRepository(name: string): RepositoryI  {
    return new Repository(name);
  };
  createCommit(message: string): Commit {
    const commit = new Commit(message)
    this.history.push(commit.id)
    return commit
  };

  getCommitLog(): string[] {
    return this.history.reverse()
  } 
  
}