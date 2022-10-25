import { bookingInterface } from "../data/bookings";
import { BookingsState } from "./BookingsContext";

type DateAction =
  | {type: 'addBooking', payload: bookingInterface}
  | {type: 'removeBooking', payload: string}
  | {type: 'editBooking', payload: bookingInterface}
  | {type: 'addTour', payload: string}
  | {type: 'editBookingProperty', payload: {pId: string, pData: {name:string, value:string}}}

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
    case 'editBookingProperty':
      const newBookings = state.bookings.map(item => {
        if(item.id===action.payload.pId){
          item = {
            ...item,
            [action.payload.pData.name]: action.payload.pData.value}
        }
        return item
      })
      return{
        ...state,
        bookings: newBookings
      }
    case 'removeBooking':
      return {
        ...state,
        bookings: state.bookings.filter(item => item.id != action.payload)
      }
    case 'addTour':
      return {
        ...state,
        tours: [
          ...state.tours,
          {name: action.payload}
        ]
      }
    default:
      return state
  }
}

