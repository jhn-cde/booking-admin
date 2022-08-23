import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';

import { colores, styles } from "../theme/appTheme"
import { ReactNode } from "react";

interface Props {
  title: String,
  children?: ReactNode//JSX.Element[] | JSX.Element
}

export const Header = ({title, children}: Props) => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.title}>
        <Text  style={{
          ...styles.title,
          color: colores.secondary,
          fontWeight: '500'
        }}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Icon name="person-circle-outline" size={40} color={colores.secondary}/>
        </TouchableOpacity>
      </View>
      <View>
        {children && children }
      </View>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container:{
    paddingVertical: 10,
  },
  title:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})