import { Branch } from "./branch";
import { Commit } from "./commit";
import { BranchI } from "./domain/branch-interface";
import { CommitI } from "./domain/commit-interface";
import { GitI } from "./domain/git-interface";
import { RepositoryI } from "./domain/repository-interface";
import { Repository } from "./repository";

// Git > Repository > Branch > Commit
export class Git implements GitI {
  repository: RepositoryI
  constructor() {
    this.createRepository('default-repository')
  }
  createRepository(name: string): RepositoryI  {
    // Keeping head on track
    this.repository = new Repository(name);
    return this.repository
  };
}