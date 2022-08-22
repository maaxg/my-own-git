import { RepositoryI } from "./repository-interface";

export interface GitI {
  /* Returns repo name if successfull */
  createRepository: (name: string) => RepositoryI

}