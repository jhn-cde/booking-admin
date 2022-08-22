import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";

export const getBookingsByTourDate = (date: Date) => {
  const { bookingsState } = useContext(BookingsContext)

  const dateCero = date
  dateCero.setHours(0, 0, 0, 0)

  return bookingsState.bookings.filter(booking =>
    new Date(booking.tourDate).getTime() === dateCero.getTime()
  )
}