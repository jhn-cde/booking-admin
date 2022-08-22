import { useContext } from "react"
import { format } from 'date-fns'
import { FlatList, StyleSheet, Text, View } from "react-native"
import { DateContext } from "../context/DateContext"
import { BookingItem } from "./BookingItem"
import { getBookinsByStateDate } from "../helpers/getBookingsByState"
import { bookingInterface } from "../data/bookings"
import { styles } from "../theme/appTheme"

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

  let bookings = getBookinsByStateDate('Pendiente', dateState.curDate)

  const grouped = groupByDate(bookings)

  return (
    <View style={customStyles.container}>
      <FlatList
        data={grouped}
        keyExtractor={item => item.date}
        renderItem={({item}) => (
          <View style={{marginBottom: 25}}>
            <Text style={styles.subtitle}>
              {item.date}
            </Text>
            {item.bookings.map(
              (booking) => <BookingItem key={booking.id} {...booking} navigateTo={navigateTo}/>
            )}
          </View>
        )}
      />
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