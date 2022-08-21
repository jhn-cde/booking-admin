import { bookings } from "../data/bookings";

export const getBookingById = (id:string = '') => {  
  return bookings.find(booking => booking.id.toLowerCase() === id.toLowerCase())
}