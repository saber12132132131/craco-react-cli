import * as actionsTypes from "./actionTypes";


export const addNumber = val => ({
  type: actionsTypes.ADD_COUNT,
  num: val
})


export const subNumber = val => ({
  type: actionsTypes.SUB_COUNT,
  num: val
})