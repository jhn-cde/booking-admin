import { bookingInterface } from "../data/bookings";
import { BookingsState } from "./BookingsContext";

type DateAction =
  | {type: 'addBooking', payload: bookingInterface}
  | {type: 'removeBooking', payload: string}
  | {type: 'editBooking', payload: bookingInterface}

export const bookingsReducer = (state: BookingsState, action: DateAction): BookingsState => {
  switch (action.type) {
    case 'addBooking':
      return{
        ...state,
        bookings: [
          ...state.bookings, 
          action.payload
        ]
      }
    case 'editBooking':
      return{
        ...state,
        bookings: state.bookings.map(item => {
          if (item.id === action.payload.id)
            return action.payload
          return item
        })
      }
    case 'removeBooking':
      return {
        ...state,
        bookings: state.bookings.filter(item => item.id != action.payload)
      }
    default:
      return state
  }
}

