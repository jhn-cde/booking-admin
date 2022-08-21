import { bookings, customerInterface } from "../data/bookings";

export interface customerDataInterface extends customerInterface{
  toursID: string[]
}

export const getCustomers = () => {  
  let lista: customerDataInterface[]
  lista = []
  bookings.map(booking => {
    const index = lista.findIndex(elem => elem.nDoc === booking.customer.nDoc)

    if(index === -1)
      lista.push({...booking.customer, toursID:[booking.id]})
    else
      lista[index].toursID.push(booking.id)
  })

  lista.sort((a, b) => a.name.localeCompare(b.name))

  return lista
}