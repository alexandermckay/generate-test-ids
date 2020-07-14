import {Assoc} from '../types'

export const assoc: Assoc = (prop, value, obj) => ({
  ...obj,
  [prop]: value,
})
