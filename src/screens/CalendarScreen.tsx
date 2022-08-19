import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { styles } from "../theme/appTheme"

export const CalendarScreen = () => {
  const {top: paddingTop} = useSafeAreaInsets()
  return (
    <View
      style = {{...styles.globalMargin, paddingTop}}
    >
      <Text style={{...styles.title}}>Calendar</Text>
    </View>
  )
}