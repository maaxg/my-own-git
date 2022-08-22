import { Commit } from "../src/commit";
import { Git } from "../src/git";
import { Repository } from "../src/repository";

describe("Git", () => {

  test('should return repo name properly', () => {
    const repo = new Repository('first-repo');
    expect(repo.name).toEqual('first-repo')
  })
  test('should create a commit properly', () => {
    const commit = new Commit('message')
    expect(commit.message).toEqual('message')
    expect(commit.id).toEqual("6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d")
  })

  test('git should implements commit and repo', () => {
    const git = new Git();
    const commit = git.createCommit('message');
    const repository = git.createRepository('second-repo');
    expect(commit.message).toEqual('message')
    expect(repository.name).toEqual('second-repo')
  })

  test('git should return commit history', () => {
    const git = new Git();
    const commit1 = git.createCommit('message');
    const commit2 = git.createCommit('message2');
    expect(git.getCommitLog()).toEqual([commit2.id, commit1.id])
  })
})