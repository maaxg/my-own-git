import { Commit } from "../src/commit";
import { Git } from "../src/git";
import {resolve} from 'path'
// TODO: Refactor commit tests to read files.
describe("Git", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  test('should return repo name properly', () => {
    const repo = new Git('first-repo');
    expect(repo.name).toEqual('first-repo') 
})
   // Creation of commit and repo
  test('git should create commit and repo', () => {
    const git = new Git('repository');
    git.branch.commit = new Commit('message', git.branch.commit)
    const commit =  git.branch.commit
    expect(commit?.message).toEqual('message')
    expect(git.name).toEqual('repository')
  })
  // Commit history
  test('git should return commit history', () => {
    const git = new Git();
    git.branch.commit = new Commit('message', git.branch.commit)
    const commit1 = git.branch.commit
    const commit2 = new Commit('message2', commit1);
    git.branch.commit = commit2
    expect(git.branch.commit?.getCommitLog()).toEqual([commit2.id, commit1.id])
  })
  // Branch checkout default
 test('should be able checkout default branch', () => {
    const git = new Git();
    const currBranch = git.checkout();
    expect(currBranch.name).toEqual('main')
  })
  // Should be able to create a new branch on checkout
   test('should be able checkout default branch', () => {
    const git = new Git();
    const currBranch = git.checkout('master');
    expect(currBranch.name).toEqual('master')
    expect(git.checkout('master').name).toEqual('master')
    git.checkout('testing')
    expect(git.checkout('testing').name).toEqual('testing')
  }) 
  // Commit history 
  test('should be able to keep commit history', () => {
    const git = new Git();
    let branch = git.branch
    const commit = branch.commit
    const commit1 = new Commit('commit1', commit) 
    branch.commit = commit1
    git.checkout('master');
    branch = git.branch
    const commit2 = new Commit('commit2', commit1)
    branch.commit = commit2;
    git.checkout('another-master');
    branch = git.branch
    const commit3 = new Commit('commit3', commit2)
    branch.commit = commit3;
    git.checkout('another-master');
    branch = git.branch

    expect(branch.commit?.getCommitLog()).toEqual([
      commit3.id,
      commit2.id,
      commit1.id
    ])
  }) 

  test('should be able to stage a file', () => {
    const git = new Git();
    const root = resolve(__dirname);
    const result = git.stageFile(`${root}/test-file.txt`)
    expect(result).toBeTruthy()
  })
})