import { StyleSheet, TouchableNativeFeedback, View } from "react-native"
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
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colores.primary, false, 30)}
        onPress={ navigate }
      >
        <View style={styles.boton}>
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
    backgroundColor: colores.acento,

    shadowColor: tema == 'dia'? colores.text: colores.acento,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {width: 1, height: 3},
    elevation: 8
  }
})