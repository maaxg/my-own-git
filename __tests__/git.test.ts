import { Commit } from "../src/commit";
import { Git } from "../src/git";
import {resolve} from 'path'
// TODO: Refactor commit tests to read files.
describe("Git", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
   // Creation of commit and repo
  test('git should create commit and repo', () => {
    const git = new Git();
    const repository = git.createRepository('repository');
    repository.branch.commit = new Commit('message', repository.branch.commit)
    const commit =  repository.branch.commit
    expect(commit?.message).toEqual('message')
    expect(repository.name).toEqual('repository')
  })
  // Commit history
  test('git should return commit history', () => {
    const git = new Git();
    const repository = git.createRepository('repository');
    repository.branch.commit = new Commit('message', repository.branch.commit)
    const commit1 = repository.branch.commit
    const commit2 = new Commit('message2', commit1);
    repository.branch.commit = commit2
    expect(repository.branch.commit?.getCommitLog()).toEqual([commit2.id, commit1.id])
  })
  // Branch checkout default
 test('should be able checkout default branch', () => {
    const git = new Git();
    const repo = git.repository
    const currBranch = repo.checkout();
    expect(currBranch.name).toEqual('main')
  })
  // Should be able to create a new branch on checkout
   test('should be able checkout default branch', () => {
    const git = new Git();
    const repo = git.repository
    const currBranch = repo.checkout('master');
    expect(currBranch.name).toEqual('master')
    expect(repo.checkout('master').name).toEqual('master')
    repo.checkout('testing')
    expect(repo.checkout('testing').name).toEqual('testing')
  }) 
  // Commit history 
  test('should be able to keep commit history', () => {
    const git = new Git();
    let branch = git.repository.branch
    const commit = branch.commit
    const commit1 = new Commit('commit1', commit) 
    branch.commit = commit1
    git.repository.checkout('master');
    branch = git.repository.branch
    const commit2 = new Commit('commit2', commit1)
    branch.commit = commit2;
    git.repository.checkout('another-master');
    branch = git.repository.branch
    const commit3 = new Commit('commit3', commit2)
    branch.commit = commit3;
    git.repository.checkout('another-master');
    branch = git.repository.branch

    expect(branch.commit?.getCommitLog()).toEqual([
      commit3.id,
      commit2.id,
      commit1.id
    ])
  }) 

  test('should be able to stage a file', () => {
    const git = new Git();
    const root = resolve(__dirname);
    const result = git.add(`${root}/test-file.txt`)
    expect(result).toBeTruthy()
  })
})