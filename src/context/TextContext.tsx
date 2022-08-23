import { createContext, useReducer } from "react"
import { textReducer } from './textReducer'

export interface TextState{
  curText: string
}

export const textInitialState: TextState = {
  curText: ''
}

export interface TextContextProps{
  textState: TextState,
  onChange: (text: string) => void
}

export const TextContext = createContext({} as TextContextProps)

export const TextProvider = ({children}: any) => {
  const [textState, dispatch] = useReducer(textReducer, textInitialState)
  
  const onChange = (text: string) => {
    dispatch({type: 'onChange', payload: text})
  }

  return(
    <TextContext.Provider value={{
      textState,
      onChange
    }}
    >
      {children}
    </TextContext.Provider>
  )
}