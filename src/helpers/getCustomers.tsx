import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";
import { customerInterface } from "../data/bookings";

interface toursInterface{
  id: string,
  name: string,
  state: string
}

export interface customerDataInterface extends customerInterface{
  tours: toursInterface[]
}

export const getCustomers = (text: string) => {
  const { bookingsState } = useContext(BookingsContext)

  let lista: customerDataInterface[]
  lista = []
  bookingsState.bookings.map(booking => {
    const index = lista.findIndex(elem => elem.nDoc === booking.customer.nDoc)

    if(index === -1)
      lista.push({...booking.customer, tours:[{id: booking.id, name: booking.tour, state: booking.state}]})
    else
      lista[index].tours.push({id: booking.id, name: booking.tour, state: booking.state})
  })

  lista.sort((a, b) => a.name.localeCompare(b.name))

  if(text === '')
    return lista
  else
    return lista.filter(customer => customer.name.toLowerCase().includes(text.toLowerCase()))
}