import { Text, View } from "react-native"
import { colores } from "../theme/appTheme"

export const BookingItem = () => {
  return (
    <View>
      <Text style={{color: colores.text}}>
        Evento
      </Text>
    </View>
  )
}