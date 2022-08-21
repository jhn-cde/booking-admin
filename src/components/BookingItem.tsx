import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colores } from "../theme/appTheme"
import { bookingInterface, bookings } from "../data/bookings"

interface itemInterface extends bookingInterface{
  navigateTo: (id:string) => void
}

export const BookingItem = ({id, tour, customer, nTravelers, navigateTo}: itemInterface) => {

  const navigate = () => {
    navigateTo(id)
  }

  return (
    <TouchableOpacity
      onPress={navigate}
    >
      <View style={styles.container}>
        <Text style={styles.customerText}>
          {customer.name}
        </Text>
        <View style={styles.content}>
          <Text>
            <Text style={styles.tourText}>
              {tour}
            </Text>
            <Text style={styles.nTravelersText}> 
              {nTravelers && ' - '+nTravelers+' pasajeros'}
            </Text>
          </Text>
          <Text style={styles.moreText}> 
            mas...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical: 4,
    paddingVertical: 4,
    borderBottomColor: colores.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  customerText:{
    color: colores.secondary,
    fontWeight: '500',
    fontSize: 20,
  },

  content:{
    flexDirection: 'row',
    fill: 1,
    justifyContent: 'space-between'
  },

  tourText:{
    color: colores.text,
    fontWeight: '600',
    fontSize: 14
  },
  nTravelersText:{
    color: colores.text,
    fontWeight: '400',
    fontSize: 12

  },
  moreText:{
    color: colores.acento
  }
})