import { bookings } from "../data/bookings";

export const getBookingsByCustomerName = (name:string = '') => {
  if(name === '')
    return bookings
  
  return bookings.filter(booking =>
    booking.customer.name.toLowerCase().includes(name.toLowerCase())
  )
}