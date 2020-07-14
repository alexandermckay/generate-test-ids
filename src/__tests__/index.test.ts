import { generateTestIds } from '../index'

describe('generateTestIds', () => {
  it('should correctly format a list of ids into an object', () => {
    const idList = ['login', 'forgot-password', 'forgot-username', 'count']
    const result = generateTestIds(idList)
    expect(result).toEqual({
      count: 'count',
      'forgot-password': 'forgot-password',
      'forgot-username': 'forgot-username',
      login: 'login',
    })
  })
  it('should throw error if duplicate key is added', () => {
    const idList = ['login', 'login', 'count']
    expect(() => {
      generateTestIds(idList)
    }).toThrow()
  })
})
