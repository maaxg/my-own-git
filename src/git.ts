import { Commit } from "./commit";
import { CommitI } from "./domain/commit-interface";
import { GitI } from "./domain/git-interface";
import { RepositoryI } from "./domain/repository-interface";
import { Repository } from "./repository";

export class Git implements GitI {
  createRepository(name: string): RepositoryI  {
    return new Repository(name);
  };
  createCommit(message: string): CommitI {
    return new Commit(message)
  };
  
}