import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";

export const getBookingById = (id:string = '') => {
  const { bookingsState } = useContext(BookingsContext)

  return bookingsState.bookings.find(booking => booking.id.toLowerCase() === id.toLowerCase())
}