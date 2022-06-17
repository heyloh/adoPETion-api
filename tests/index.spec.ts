import { sum } from '../src/index';
describe("Test index", () => {
  it("should be able to sum two numbers correctly", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
})
