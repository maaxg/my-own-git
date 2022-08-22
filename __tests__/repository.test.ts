import { Repository } from "../src/repository";

describe('Repository', () => {
  test('should return repo name properly', () => {
    const repo = new Repository('first-repo');
    expect(repo.name).toEqual('first-repo')
  })

})