import { bookings } from "../data/bookings";

export const getBookingsByCustomerName = (tour:string = '') => {
  if(tour === '')
    return bookings
  
  return bookings.filter(booking =>
    booking.tour.toLowerCase().includes(tour.toLowerCase())
  )
}