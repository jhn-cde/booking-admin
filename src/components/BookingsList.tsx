import { useContext } from "react"
import { View } from "react-native"
import { DateContext } from "../context/DateContext"
import { BookingItem } from "./BookingItem"

//temporal
const bookings = [
  {
    id: '123',
    data: {
      tour: 'Cusco',
      customerId: 'customer1a',
      customerName: 'Will A. M',
      nTravelers: 4,
      date: '2022/08/20'
    }
  },
  {
    id: '321',
    data: {
      tour: 'Machupicchu',
      customerId: 'customer1b',
      customerName: 'Elizabeth',
      nTravelers: 3,
      date: '2022/08/20'
    }
  },
  {
    id: '213',
    data: {
      tour: 'Manu',
      customerId: 'customer1c',
      customerName: 'Albus',
      nTravelers: 1,
      date: '2022/08/21'
    }
  },
  {
    id: '312',
    data: {
      tour: 'Manu',
      customerId: 'customer1c',
      customerName: 'Grind',
      nTravelers: 1,
      date: '2022/08/21'
    }
  },
]

export const BookingsList = () => {
  const { dateState } = useContext(DateContext)
  return (
    <View>
      {
        bookings
        .filter((booking) =>
          dateState.curDate.getDate() === new Date(booking.data.date).getDate()
        ).map((booking) =>
          <BookingItem key={booking.id} {...booking.data}/>
        )
      }
    </View>
  )
}