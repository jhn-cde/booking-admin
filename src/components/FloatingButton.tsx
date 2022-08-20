import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { colores, tema } from "../theme/appTheme";

export const FloatingButton = () => {
  return(
    <View
      style={{
        ...styles.botonContainer,
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colores.primary, false, 30)}
        onPress={ () => {} }
      >
        <View style={{
          ...styles.boton,
          backgroundColor: colores.acento
        }}>
          <Icon name="plus" color={'white'} size={35} />
        </View>
      </TouchableNativeFeedback>
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

    shadowColor: tema == 'dia'? colores.text: colores.acento,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {width: 1, height: 3},
    elevation: 8
  }
})