import { bookingInterface, bookings } from "../data/bookings";
import { getBookingsByTourDate } from "./getBookingByTourDate";

export const getBookingsByState = (state: string, pbookings: bookingInterface[] | undefined) => {

  const validStatus = ['cancelado','pendiente','finalizado'];
  if ( !validStatus.includes( state ) ) {
    console.log(`${ state } is not a valid state`);
    return []
  }

  if(pbookings !== undefined)
    return pbookings.filter( booking => booking.state === state )
  return bookings.filter( booking => booking.state === state );
}

export const getBookinsByStateDate = ( state: string, date: Date | undefined = undefined ) => {
  let bookingsCopy = bookings
  if(date !== undefined){
    date.setHours(0, 0, 0, 0)
    bookingsCopy = bookings.filter(booking => new Date(booking.tourDate) >= date)
  }

  return getBookingsByState(state, bookingsCopy)
}


