import { sum } from '@/app'

describe('sum', () => {
  test('should return the correct sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(5, 10)).toBe(15)
    expect(sum(-3, 7)).toBe(4)
  })
})
