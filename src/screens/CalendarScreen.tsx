import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colores, styles } from "../theme/appTheme"

//componentes
import { FloatingButton } from "../components/FloatingButton"
import { BookingsList } from "../components/BookingsList"
import { Header } from "../components/Header"

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
      <Header title='Calendario'/>
      
      <BookingsList />
      <FloatingButton />
    </View>
  )
}