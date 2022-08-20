import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colores, styles } from "../theme/appTheme"

export const CustomersScreen = () => {
  const {top: paddingTop} = useSafeAreaInsets()
  return (
    <View
      style={{
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
        Customers
      </Text>
    </View>
  )
}