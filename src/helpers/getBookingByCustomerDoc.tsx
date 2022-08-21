import { bookings } from "../data/bookings";

export const getBookingByCustomerDoc = (nDoc:string = '') => {  
  return bookings.find(booking => booking.customer.nDoc.toLowerCase() === nDoc.toLowerCase())
}