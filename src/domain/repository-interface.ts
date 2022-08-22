import { BranchI } from "./branch-interface";

export interface RepositoryI {
  name: string
  branch: BranchI
  /*
    if exists changes to branch 
    if not exists create and change to branch
  */
  checkout: (name?: string) => BranchI;
}