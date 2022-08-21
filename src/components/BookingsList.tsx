import { useContext } from "react"
import { format } from 'date-fns'
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { DateContext } from "../context/DateContext"
import { BookingItem } from "./BookingItem"
import { getBookinsByState } from "../helpers/getBookingsByState"
import { bookingInterface } from "../data/bookings"
import { colores, styles } from "../theme/appTheme"

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

interface Props{
  navigateTo: (id: string) => void
}

export const BookingsList = ({navigateTo}: Props) => {
  const { dateState } = useContext(DateContext)

  let bookings = getBookinsByState('pendiente', dateState.curDate)

  const grouped = groupByDate(bookings)

  return (
    <View style={customStyles.container}>
      <ScrollView>
        {
          grouped.map(
            ({date, bookings}: groupedInterface, index) => {
              return (
                <View key={date}>
                  <Text style={{
                    ...styles.subtitle,
                    marginTop: index === 0 ? 0: 60,
                  }}>
                    {date}
                  </Text>
                  {bookings.map(
                    (booking) => <BookingItem key={booking.id} {...booking} navigateTo={navigateTo}/>
                  )}
                </View>
              )
            }
          )
        }
      </ScrollView>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    flex:1, 
    flexDirection: 'row', 
    alignItems: 'flex-end'
  }
})