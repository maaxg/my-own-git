import { CommitI } from "./commit-interface";
import { RepositoryI } from "./repository-interface";

export interface GitI {

  /* Returns repo name if successfull */
  createRepository: (name: string) => RepositoryI
  /* Returns commit message if successfull */
  createCommit: (message: string) => CommitI
  /* Returns commit history */
  getCommitLog: () => string[];
}