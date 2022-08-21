import { bookings } from "../data/bookings";

export const getBookingsByTourDate = (date: Date) => {
  const dateCero = date
  dateCero.setHours(0, 0, 0, 0)
  return bookings.filter(booking =>
    new Date(booking.tourDate).getTime() === dateCero.getTime()
  )
}