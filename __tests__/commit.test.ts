import { Commit } from "../src/commit"

describe('Commit', () => {
   test('should create a commit properly', () => {
    const commit = new Commit('message', null)
    expect(commit.message).toEqual('message')
    expect(commit.id).toEqual("6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d")
  }) 
})