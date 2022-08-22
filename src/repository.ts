import { RepositoryI } from "./domain/repository-interface";

export class Repository implements RepositoryI {
  name: string
  constructor(name: string) {
    this.name = name
  }
}