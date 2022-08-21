import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet, Text, View } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { useEffect } from "react"
import { format } from 'date-fns'

import { getBookingById } from "../helpers/getBookingById"
import { RootStackParams } from "../navigator/StackNavigator"
import { colores, styles } from "../theme/appTheme"

interface Props extends NativeStackScreenProps<RootStackParams, 'Booking'>{}

export const BookingScreen = ({route, navigation}: Props) => {
  
  let booking = getBookingById(route.params.id) 

  useEffect(() => { 
    navigation.setOptions({
      title: 'Booking ' + booking?.id,
      headerTitleStyle:{
        color: colores.secondary
      },
      headerShadowVisible: false,
    });
  }, [navigation])

  return (
    <View
      style={{
        ...styles.globalPadding,
        backgroundColor: colores.primary,
        flex: 1
      }}
    >
      <Text style={customStyles.sectionTitle}>Datos de reserva</Text>
      <View style={customStyles.section}>
        <Icon style={customStyles.icon} name="document-text-outline"/>
        <View style={customStyles.textWrap}>
          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Fecha de salida: </Text>
            <Text style={{...customStyles.value, ...customStyles.important}}>
              {booking? format(new Date(booking.tourDate), 'd MMM, y'): ''}
            </Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Booking ID: </Text>
            <Text style={customStyles.value}>{booking?.id}</Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Tour: </Text>
            <Text style={customStyles.value}>{booking?.tour}</Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Número de pasajeros: </Text>
            <Text style={customStyles.value}>{booking?.nTravelers}</Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Fecha de reserva: </Text>
            <Text style={customStyles.value}>
              {booking? format(new Date(booking.bookingDate), 'd MMM, y'): ''}
            </Text>                
          </Text>
        </View>
      </View>

      <Text style={customStyles.sectionTitle}>Datos de contacto</Text>
      <View style={customStyles.section}>
        <Icon style={customStyles.icon} name="person-outline"/>
        <View style={customStyles.textWrap}>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Nombre: </Text>
            <Text style={{...customStyles.value, ...customStyles.important}}>{booking?.customer.name}</Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Documento: </Text>
            <Text style={customStyles.value}>{booking?.customer.nDoc}</Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Telefono: </Text>
            <Text style={customStyles.value}>{booking?.customer.phone}</Text>        
          </Text>

          <Text style={customStyles.subsection}>
            <Text style={customStyles.cat}>Email: </Text>
            <Text style={customStyles.value}>{booking?.customer.email}</Text>        
          </Text>
        </View>
      </View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  sectionTitle:{
    ...styles.subtitle,
    color: colores.secondary,
    fontSize: 25,
    marginBottom: 10,
    marginTop: 50,
    borderBottomColor: colores.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  section:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    
  },
  icon:{
    fontSize: 70,
    color: colores.secondary,
    paddingRight: 15
  },
  textWrap:{
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  subsection:{
    paddingVertical: 2,
  },
  cat: {
    ...styles.text,
    fontWeight: '600',
    fontSize: 16
  },
  value: {
    ...styles.text,
    fontSize: 15
  },
  important: {
    fontSize: 18,
    color: colores.acento,
    fontWeight: '600'
  }
})