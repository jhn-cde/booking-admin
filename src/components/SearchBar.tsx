import { useContext } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { TextContext } from "../context/TextContext"
import { colores } from "../theme/appTheme"

export const SearchBar = () => {

  const { textState, onChange } = useContext(TextContext)

  const onChangeText = (text: string) => {
    onChange(text)
  }
  return(
    <View style={customStyles.container}>
      <TextInput
        style={customStyles.input}
        placeholder='Buscar'
        onChangeText={onChangeText}
        defaultValue={textState.curText}
      />
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    height: 50,
    marginTop: 10,
    marginBottom: 5
  },
  input:{
    fontSize: 20,
    borderColor: colores.border,
    borderBottomWidth: 1,
    height: '100%',
    color: colores.text
  }
})