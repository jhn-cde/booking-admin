import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";

export interface bookingInterfaceId{
  id: string,
  tour: string,
  nTravelers: number,
  bookingDate: Date,
  tourDate: Date,
  state: string,
  nDoc: string,
  name: string,
  phone: string,
  email: string
}

const defaultBooking: bookingInterfaceId = {
  id: '',
  tour: 'Manu',
  nTravelers: 1,
  bookingDate: new Date(),
  tourDate: new Date(),
  state: 'Pendiente',
  nDoc: '',
  name: '',
  phone: '',
  email: ''
}

export const getBookingById = (id: string | undefined = '' ) => {
  if(!id)
    return defaultBooking

  const { bookingsState } = useContext(BookingsContext)

  const booking = bookingsState.bookings.find(booking => booking.id.toLowerCase() === id.toLowerCase())

  return booking?{
    id: booking.id,
    tour: booking.tour,
    nTravelers: booking.nTravelers,
    bookingDate: new Date(booking.bookingDate),
    tourDate: new Date(booking.tourDate),
    state: booking.state,
    nDoc: booking.customer.nDoc,
    name: booking.customer.name,
    phone: booking.customer.phone,
    email: booking.customer.email
  }: defaultBooking
}