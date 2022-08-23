import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colores, styles } from "../theme/appTheme"
import { bookingInterface } from "../data/bookings"

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
      <View style={customStyles.container}>
        <Text style={customStyles.customerText}>
          {customer.name}
        </Text>
        <View style={customStyles.content}>
          <Text>
            <Text style={customStyles.tourText}>
              {tour}
            </Text>
            <Text style={customStyles.nTravelersText}> 
              {nTravelers && ' - '+nTravelers+' pasajeros'}
            </Text>
          </Text>
          <Text style={customStyles.moreText}> 
            Ver más...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
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
    ...styles.text,
    fontWeight: '600',
  },
  nTravelersText:{
    ...styles.text,
    fontSize: 12

  },
  moreText:{
    color: colores.secondary
  }
})