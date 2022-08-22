import { Git } from "../src/git";

describe("Git", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
   // Creation of commit and repo
  test('git should create commit and repo', () => {
    const git = new Git();
    const repository = git.createRepository('second-repo');
    const commit = git.createCommit('message');
    expect(commit.message).toEqual('message')
    expect(repository.name).toEqual('second-repo')
  })
  // Commit history
  test('git should return commit history', () => {
    const git = new Git();
    const commit1 = git.createCommit('message');
    const commit2 = git.createCommit('message2');
    expect(git.getCommitLog()).toEqual([commit2.id, commit1.id])
  })
  // Branch checkout default
  test('should be able checkout default branch', () => {
    const git = new Git();
    const branch = git.checkoutBranch();
    expect(branch.name).toEqual('main')
  })
  // Should be able to create a new branch on checkout
  test('should be able checkout default branch', () => {
    const git = new Git();
    const branch = git.checkoutBranch('master');
    expect(branch.name).toEqual('master')
    expect(git.checkoutBranch('master').name).toEqual('master')
    git.checkoutBranch('testing')
    expect(git.checkoutBranch('testing').name).toEqual('testing')
  })
  // Commit history 
  test('should be able to keep commit history', () => {
    const git = new Git();
    const commit1 = git.createCommit('commit1')
    git.checkoutBranch('master');
    const commit2 = git.createCommit('commit2')
    git.checkoutBranch('another-master');
    
    expect(git.getCommitLog()).toEqual([
      commit2.id,
      commit1.id
    ])

  })
})