import { assoc, reduce } from './utils'

const initValue = {}

export const generateTestIds = reduce((obj, key) => {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    throw new Error('Duplicate test id')
  } else {
    const value = key
    return assoc(key, value, obj)
  }
}, initValue)
