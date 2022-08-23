import { createContext, useReducer } from "react"
import { bookingInterface, bookings } from "../data/bookings"
import { bookingsReducer } from "./bookingsReducer"

//Informacion que contiene
export interface BookingsState {
  bookings: bookingInterface[], 
}

//Estado inicial
export const bookingsInitialState: BookingsState = {
  bookings: bookings,
}

// inteface de contexto
export interface BookingsContextProps{
  bookingsState: BookingsState,
  addBooking: (pbooking: bookingInterface) => void,
  removeBooking: (bookingId: string) => void,
  editBooking: (pbooking: bookingInterface) => void
}

// contexto
export const BookingsContext = createContext({} as BookingsContextProps)

//componente
export const BookingsProvider = ({children}: any) => {
  const [bookingsState, dispatch] = useReducer(bookingsReducer, bookingsInitialState)
  
  const addBooking = (pBooking: bookingInterface) => {
    dispatch({type: 'addBooking', payload: pBooking})
  }
  const removeBooking = (bookingId: string) => {
    dispatch({type: 'removeBooking', payload: bookingId})
  }
  const editBooking = (pBooking: bookingInterface) => {
    dispatch({type: 'editBooking', payload: pBooking})
  }

  return(
    <BookingsContext.Provider value={{
      bookingsState,
      addBooking,
      editBooking,
      removeBooking,
    }}
    >
      {children}
    </BookingsContext.Provider>
  )
}