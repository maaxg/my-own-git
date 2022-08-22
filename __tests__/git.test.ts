import { Git } from "../src/git";

describe("Git", () => {
  test('git should create commit and repo', () => {
    const git = new Git();
    const repository = git.createRepository('second-repo');
    const commit = git.createCommit('message');
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