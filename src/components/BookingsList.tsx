import { useContext } from "react"
import { ScrollView, View } from "react-native"
import { DateContext } from "../context/DateContext"
import { BookingItem } from "./BookingItem"
import { getBookingsByTourDate } from "../selector/getBookingByTourDate"
import { SafeAreaView } from "react-native-safe-area-context"

export const BookingsList = () => {
  const { dateState } = useContext(DateContext)

  const bookings = getBookingsByTourDate(dateState.curDate)

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        {
          bookings.map(
            (booking) => <BookingItem key={booking.id} {...booking}/>
          )
        }
      </ScrollView>
    </SafeAreaView>
  )
}