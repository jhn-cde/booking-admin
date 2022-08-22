import { Pressable, StyleSheet, TouchableNativeFeedback, View } from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { colores, tema } from "../theme/appTheme";

interface Props {
  navigateTo: () => void
}

export const FloatingButton = ({navigateTo}: Props) => {

  const navigate = () => {
    navigateTo()
  }

  return(
    <View
      style={styles.botonContainer}
    >
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
              ? colores.acento2
              : colores.acento
            },
            styles.boton
          ]}
          onPress={ navigate }
        >
          {({ pressed }) => (
          <Icon
            name="plus"
            style={{
              ...styles.text,
            }}
          />
        )}
        </Pressable>
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