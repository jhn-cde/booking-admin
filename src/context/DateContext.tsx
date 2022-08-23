import { createContext, useReducer } from "react"
import { dateReducer } from "./dateReducer"

//Informacion que contiene
export interface DateState {
  curDate: Date, 
}

//Estado inicial
export const dateInitialState: DateState = {
  curDate: new Date(),
}

// inteface de contexto
export interface DateContextProps{
  dateState: DateState,
  setDate: (date: Date) => void,
}

// contexto
export const DateContext = createContext({} as DateContextProps)

//componente
export const DateProvider = ({children}: any) => {
  const [dateState, dispatch] = useReducer(dateReducer, dateInitialState)
  
  const setDate = (date: Date) => {
    dispatch({type: 'setDate', payload: date})
  }

  return(
    <DateContext.Provider value={{
      dateState,
      setDate
    }}
    >
      {children}
    </DateContext.Provider>
  )
}