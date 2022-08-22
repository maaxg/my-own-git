import { BranchI } from "./domain/branch-interface";
import { CommitI } from "./domain/commit-interface";

export class Branch implements BranchI {
  name: string;
  commit: CommitI | null;
  constructor(name: string, commit: CommitI | null){
    this.name = name;
    this.commit = commit;
  }
}