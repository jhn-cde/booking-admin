import { TextState } from "./TextContext";

type TextAction =
  | {type: 'onChange', payload: string}

export const textReducer = (state: TextState, action: TextAction): TextState => {
  switch (action.type) {
    case 'onChange':
      return{
        ...state,
        curText: action.payload
      }
  
    default:
      return state
  }
}

