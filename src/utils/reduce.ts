import {Reduce} from '../types'

export const reduce: Reduce = (reducer, initalValue) => (list) =>
  list.reduce(reducer, initalValue)
