import { CommitI } from "./commit-interface"

export interface BranchI {
 name: string
 commit: CommitI | null
}