import { bookings } from "../data/bookings";
import { getBookingsByTourDate } from "./getBookingByTourDate";

export const getBookinsByState = ( state: string, date: Date | undefined = undefined ) => {
  let bookingsCopy = bookings
  if(date !== undefined){
    date.setHours(0, 0, 0, 0)
    bookingsCopy = bookings.filter(booking => new Date(booking.tourDate) >= date)
  }

  const validStatus = ['cancelado','pendiente','finalizado'];
  if ( !validStatus.includes( state ) ) {
    throw new Error(`${ state } is not a valid publisher`);
  }

  return bookingsCopy.filter( booking => booking.state === state );
}


