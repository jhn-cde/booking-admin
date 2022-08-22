import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colores, styles } from "../theme/appTheme"

export interface dropdownInterface{
  name: string
}

interface Props{
  data: string[],
  value: string,
  onSelect: (val: string) => void,
  placeHolder: string,
  editable: boolean
}

export const DropDown = ({data, value, onSelect, placeHolder, editable}: Props) => {
  const [shownOption, setShownOption] = useState(false)

  const onPresss = (val: string) => {
    setShownOption(!shownOption)
    onSelect(val)
  }

  return(
    <>
      {
        editable
        ? <View>
        <TextInput
            style={customStyles.input}
            placeholder={placeHolder}
            defaultValue={value}
            onFocus={() => setShownOption(!shownOption)}
          /></View>
        : <TouchableOpacity
            onPress={() => setShownOption(!shownOption)}
          >
            <Text style={customStyles.input}>
              {value}
            </Text>
          </TouchableOpacity>
      }
      <View style={customStyles.optionsContainer}>
        {shownOption && <View style={customStyles.optionsBox}>
          <ScrollView
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
          >
            {data.map((val, i) => {
              return(
                <TouchableOpacity
                  key={String(i)}
                  onPress={() => onPresss(val)}
                  style={{...customStyles.touchable,
                    backgroundColor: value==val 
                    ?colores.secondary : colores.opacity,
                  }}
                >
                  <Text
                    style={{...customStyles.option,
                      color: value==val
                      ?colores.primary: colores.text
                    }}
                  >{val}</Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>}
      </View>
    </>
  )
}

const customStyles = StyleSheet.create({
  input:{
    ...styles.input,
  },
  optionsContainer:{
    position:'absolute',
    top: 52,
    zIndex: 1,
    width: '100%',
    maxHeight: 160,
    backgroundColor: colores.primary
  },
  optionsBox:{
    padding: 8,
    borderRadius: 4,
  },
  touchable:{
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginBottom: 3,
  },
  option:{
    ...styles.text,
  }
})