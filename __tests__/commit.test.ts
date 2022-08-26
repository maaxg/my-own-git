import { Commit } from "../src/commit"
import sha1 from 'sha1'
describe('Commit', () => {
   test('should create a commit properly', () => {
    const commit = new Commit('message', null)
    expect(commit.message).toEqual('message')
    expect(commit.id).toEqual(sha1(commit.content))
  }) 
})