import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { getBookingById } from "../helpers/getBookingById"
import { RootStackParams } from "../navigator/StackNavigator"
import { colores, styles } from "../theme/appTheme"

interface Props extends NativeStackScreenProps<RootStackParams, 'Booking'>{}

export const BookingScreen = ({route, navigation}: Props) => {
  
  let booking = getBookingById(route.params.id) 

  useEffect(() => { 
    navigation.setOptions({
      title: booking?.tour + ' - ' + booking?.customer.name,
      headerTitleStyle:{
        color: colores.secondary
      },
      headerShadowVisible: false,
    });
  }, [navigation])

  return (
    <View
      style={{
        ...styles.globalPadding,
        backgroundColor: colores.primary,
        flex: 1
      }}
    >
      <Text style={{
        ...styles.title,
        color: colores.secondary,
        fontWeight: '500'
      }}>
        Booking {route.params.id}
      </Text>
    </View>
  )
}