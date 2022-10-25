import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Ionicons as Icon} from '@expo/vector-icons';
import { colores } from "../theme/appTheme";

interface Props {
  navigateTo: () => void,
  iconName: keyof typeof Icon.glyphMap
}

export const FloatingButton = ({navigateTo, iconName}: Props) => {

  const navigate = () => {
    navigateTo()
  }

  return(
    <View
      style={styles.botonContainer}
    >
        <TouchableOpacity
          style={{
              ...styles.boton,
              backgroundColor: colores.acento
            }}
          onPress={ navigate }
          activeOpacity={0.7}
        >
          {(
          <Icon
            name={iconName}
            style={{
              ...styles.text,
            }}
          />
        )}
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  botonContainer:{
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  touchable:{
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  boton:{
    height: 55,
    width: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  text:{
    fontSize: 35,
    color: colores.primary
  }
})