import { bookings } from "../data/bookings";

export const getBookingsById = (id:string = '') => {  
  return bookings.find(booking => booking.id.toLowerCase() === id.toLowerCase())
}