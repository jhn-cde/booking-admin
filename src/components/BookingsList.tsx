import { useContext } from "react"
import { format } from 'date-fns'
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { DateContext } from "../context/DateContext"
import { BookingItem } from "./BookingItem"
import { SafeAreaView } from "react-native-safe-area-context"
import { getBookinsByState } from "../helpers/getBookingByState"
import { bookingInterface } from "../data/bookings"
import { colores } from "../theme/appTheme"

interface groupedInterface{
  date: string,
  bookings: bookingInterface[]
}


const groupByDate = (ungrouped: bookingInterface[]) => {
  let grouped: groupedInterface[]
  grouped = []
  
  ungrouped.map((booking: bookingInterface) =>{
    const date = format(new Date(booking.tourDate), 'd MMM, y')
    const index = grouped.findIndex(elem => elem.date === date)
    
    if(index === -1){
      grouped.push({
        date,
        bookings: [booking]
      })
    }
    else
      grouped[index].bookings.push(booking)
  })
  return grouped
}

export const BookingsList = () => {
  const { dateState } = useContext(DateContext)

  let bookings = getBookinsByState('pendiente', dateState.curDate)

  const grouped = groupByDate(bookings)

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        {
          grouped.map(
            ({date, bookings}: groupedInterface, index) => {
              return (
                <View key={date}>
                  <Text style={{
                    ...customStyles.dateText,
                    marginTop: index === 0 ? 0: 60,
                  }}>
                    {date}
                  </Text>
                  {bookings.map(
                    (booking) => <BookingItem key={booking.id} {...booking}/>
                  )}
                </View>
              )
            }
          )
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const customStyles = StyleSheet.create({
  dateText: {
    fontSize: 20,
    fontWeight: '500',
    color: colores.acento
  }
})