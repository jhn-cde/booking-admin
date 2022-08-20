import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colores } from "../theme/appTheme"

interface Props{
  tour: string,
  customerId: string,
  customerName: string,
  nTravelers?: number
}

export const BookingItem = ({tour, customerId, customerName, nTravelers}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View style={styles.container}>
        <Text style={styles.tourText}> {tour} </Text>
        <Text style={styles.customerText}>
          <Text style={{fontWeight: '600', fontSize: 14}}>
            {customerName}
          </Text>
          <Text style={{fontWeight: '400', fontSize: 12}}> 
            {nTravelers && ' - '+nTravelers+' pasajeros'}
          </Text>
        </Text>
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
  text: {
    color: colores.text
  },
  tourText:{
    color: colores.secondary,
    fontWeight: '500',
    fontSize: 20
  },
  customerText:{
    color: colores.text
  }
})