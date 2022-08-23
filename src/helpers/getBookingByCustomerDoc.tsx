import { useContext } from "react"
import { BookingsContext } from "../context/BookingsContext"

export const getBookingByCustomerDoc = (nDoc:string = '') => {
  const { bookingsState } = useContext(BookingsContext)

  return bookingsState.bookings.find(booking => booking.customer.nDoc.toLowerCase() === nDoc.toLowerCase())
}