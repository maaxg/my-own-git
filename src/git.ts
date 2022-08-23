import { Add } from "./add";
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
  add(path: string): boolean {
    return new Add().stageFile(path)
  }
}