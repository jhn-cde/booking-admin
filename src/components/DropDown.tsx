import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colores, styles } from "../theme/appTheme"

export interface dropdownInterface{
  id: number, name: string
}

interface Props{
  data: dropdownInterface[],
  value: dropdownInterface | null,
  onSelect: (val: dropdownInterface) => void,
  placeHolder: string
}

export const DropDown = ({data, value, onSelect, placeHolder}: Props) => {
  const [shownOption, setShownOption] = useState(false)

  return(
    <View>
      <View style={customStyles.inputContainer}>
        <TextInput
          style={customStyles.input}
          placeholder={placeHolder}
          onFocus={() => setShownOption(!shownOption)}
          onBlur={() => setShownOption(!shownOption)}
          defaultValue={value?.name}
        />
      </View>
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
                  onPress={() => onSelect(val)}
                  style={{...customStyles.touchable,
                    backgroundColor: value?.id==val.id 
                    ?colores.secondary : colores.opacity,
                  }}
                >
                  <Text
                    style={{...customStyles.option,
                      color: value?.id==val.id
                      ?colores.primary: colores.text
                    }}
                  >{val.name}</Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>}
      </View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  inputContainer:{
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: 56,
    borderRadius: 6,
  },
  input:{
    ...styles.text, 
    fontSize: 20,
    borderColor: colores.border,
    borderBottomWidth: 1,
    padding: 5,
    paddingLeft: 0,
    width: '100%',
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