import { BranchI } from "./branch-interface";

export interface CommitI {
  id: string
  message: string
  parent: CommitI | null
  /* Returns commit history */
  getCommitLog: () => string[];
}