import { StyleSheet } from 'react-native'
//https://coolors.co/feb500-3066be-ffffff

export let tema = 'dia'

const noche = {
  primary: '#000000',
  secondary: '#3066be',
  acento: '#feb500',
  text: '#ffffff',
}

const dia = {
  primary: '#ffffff',
  secondary: '#3066be',
  acento: '#feb500',
  text: '#000000',
}

export const colores = tema == 'dia'? dia: noche

export const styles = StyleSheet.create({
  globalPadding:{
    paddingHorizontal: 20
  },
  title:{
    fontSize: 30,
    marginBottom: 10
  },
  subtitle:{
    fontSize: 20,
    fontWeight: '500',
    color: colores.acento
  },
  text:{
    color: colores.text,
    fontSize: 14
  }
})