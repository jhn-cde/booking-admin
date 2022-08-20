import { Text, View } from "react-native"
import { colores } from "../theme/appTheme"
import { BookingItem } from "./BookingItem"

//temporal
const bookings = [
  {
    id: '123',
    data: {
      tour: 'Cusco',
      customerId: 'customer1a',
      customerName: 'Will A. M',
      nTravelers: 4
    }
  },
  {
    id: '321',
    data: {
      tour: 'Machupicchu',
      customerId: 'customer1b',
      customerName: 'Elizabeth',
      nTravelers: 3
    }
  },
  {
    id: '213',
    data: {
      tour: 'Manu',
      customerId: 'customer1c',
      customerName: 'Albus',
      nTravelers: 1
    }
  },
]

export const BookingsList = () => {
  return (
    <View>
      {bookings.map((booking) =>
        <BookingItem key={booking.id} {...booking.data}/>
      )}
      
    </View>
  )
}