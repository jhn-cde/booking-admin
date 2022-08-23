import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";
import { bookingInterface } from "../data/bookings";

export const getBookingsByState = (state: string, pbookings: bookingInterface[] | undefined) => {
  const { bookingsState } = useContext(BookingsContext)

  const validStatus = ['Cancelado','Pendiente','Finalizado'];
  if ( !validStatus.includes( state ) ) {
    console.log(`${ state } is not a valid state`);
    return []
  }

  if(pbookings !== undefined)
    return pbookings.filter( booking => booking.state === state )
  return bookingsState.bookings.filter( booking => booking.state === state );
}

export const getBookinsByStateDate = ( state: string, date: Date | undefined = undefined ) => {
  const { bookingsState} = useContext(BookingsContext)
  let bookingsCopy = bookingsState.bookings
  if(date !== undefined){
    date.setHours(0, 0, 0, 0)
    bookingsCopy = bookingsState.bookings.filter(booking => new Date(booking.tourDate) >= date)
  }

  bookingsCopy.sort((a, b) => a.tourDate.localeCompare(b.tourDate))

  return getBookingsByState(state, bookingsCopy)
}


