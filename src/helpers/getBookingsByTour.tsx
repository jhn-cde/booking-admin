import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";

export const getBookingsByCustomerName = (tour:string = '') => {
  const { bookingsState} = useContext(BookingsContext)
  
  if(tour === '')
    return bookingsState.bookings
  
  return bookingsState.bookings.filter(booking =>
    booking.tour.toLowerCase().includes(tour.toLowerCase())
  )
}