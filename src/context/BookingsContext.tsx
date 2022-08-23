import { createContext, useReducer } from "react"
import { bookingInterface, bookings, initialStates, initialTours, stateInterface, tourInterface } from "../data/bookings"
import { bookingsReducer } from "./bookingsReducer"

//Informacion que contiene
export interface BookingsState {
  bookings: bookingInterface[],
  states: stateInterface[],
  tours: tourInterface[]
}

//Estado inicial
export const bookingsInitialState: BookingsState = {
  bookings: bookings,
  states: initialStates,
  tours: initialTours
}

// inteface de contexto
export interface BookingsContextProps{
  bookingsState: BookingsState,
  addBooking: (pbooking: bookingInterface) => void,
  removeBooking: (bookingId: string) => void,
  editBooking: (pbooking: bookingInterface) => void,
  addTour: (ptour: string) => void,
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
  const addTour = (ptour: string) => {
    dispatch({type: 'addTour', payload: ptour})
  }

  return(
    <BookingsContext.Provider value={{
      bookingsState,
      addBooking,
      editBooking,
      removeBooking,
      addTour
    }}
    >
      {children}
    </BookingsContext.Provider>
  )
}