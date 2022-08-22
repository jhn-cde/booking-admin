import { useContext } from "react"
import { BookingsContext } from "../context/BookingsContext"

export const getBookingsByCustomerName = (name:string = '') => {
  const { bookingsState } = useContext(BookingsContext)

  if(name === '')
    return bookingsState.bookings
  
  return bookingsState.bookings.filter(booking =>
    booking.customer.name.toLowerCase().includes(name.toLowerCase())
  )
}