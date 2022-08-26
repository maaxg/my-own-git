import { Add } from "./add";
import { GitI } from "./domain/git-interface";
import { RepositoryI } from "./domain/repository-interface";
import { Repository } from "./repository";

// Git > Repository > Branch > Commit
export class Git implements GitI {
  repository: RepositoryI
  constructor() {
    this.repository = this.createRepository('default-repository')
  }
  createRepository(name: string): RepositoryI  {
    return new Repository(name);
  };
  add(path: string): boolean {
    return new Add().stageFile(path)
  }
}