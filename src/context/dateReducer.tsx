import { DateState } from "./DateContext";

type DateAction =
  | {type: 'setDate', payload: Date}

export const dateReducer = (state: DateState, action: DateAction): DateState => {
  switch (action.type) {
    case 'setDate':
      return{
        ...state,
        curDate: action.payload
      }
  
    default:
      return state
  }
}

