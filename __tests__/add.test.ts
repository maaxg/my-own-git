import { Add } from "../src/add"
describe('Add', () => {
  test('should stage a file into db-test', () => {
    const add = new Add(`${__dirname}/db-test.txt`)
    const result = add.stageFile(`${__dirname}/test-file.txt`)
    expect(result).toBeTruthy()
    expect(add.stagedFiles()).toEqual(`${__dirname}/test-file.txt`)
  })
  test('should not stage a file because it does not exists', () => {
    const add = new Add(`${__dirname}/db-test.txt`)
    const result = add.stageFile(`${__dirname}/test-file.xt`)
    expect(result).toBeFalsy()
  })
})