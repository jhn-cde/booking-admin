import { bookingInterface } from "../data/bookings";
import { BookingsState } from "./BookingsContext";

type DateAction =
  | {type: 'addBooking', payload: bookingInterface}

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
  
    default:
      return state
  }
}

