import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colores, styles } from "../theme/appTheme"

//componentes
import { FloatingButton } from "../components/FloatingButton"
import { BookingsList } from "../components/BookingsList"

export const CalendarScreen = () => {
  const {top: paddingTop} = useSafeAreaInsets()
  return (
    <View
      style = {{
        ...styles.globalPadding,
        paddingTop,
        backgroundColor: colores.primary,
        flex: 1
      }}
    >
      <Text style={{
        ...styles.title,
        color: colores.secondary,
        fontWeight: '500'
      }}>
        Calendario
      </Text>

      <BookingsList />
      <FloatingButton />
    </View>
  )
}