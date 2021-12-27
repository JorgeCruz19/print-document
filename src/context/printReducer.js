import { types } from "../types/types"

export const printReducer = (state = {}, action) => {
  switch (action.type) {
    case types.print:
        return {
          ...action.payload
        }  
    default:
      return state;
  }
}