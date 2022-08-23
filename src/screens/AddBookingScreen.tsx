import { Pressable, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";

import { DropDown } from "../components/DropDown";
import { bookingInterface, states, tours } from "../data/bookings";
import { colores, styles } from "../theme/appTheme";
import { useForm } from "../hooks/useForm";
import { DatePicker } from "../components/DatePicker";
import { useContext, useEffect } from "react";
import { BookingsContext } from "../context/BookingsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { getBookingById } from "../helpers/getBookingById";

interface Props extends NativeStackScreenProps<RootStackParams, 'AddBooking'>{}

export const AddBookingScreen = ({route, navigation}: Props) => {
  const { bookingsState, addBooking, editBooking } = useContext(BookingsContext)
  const booking = getBookingById(route.params?.id)
  
  let edit = booking.id!=''

  const [data, handleDataChange, setData] = useForm(booking)

  const saveBooking = () => {
    let newBooking: bookingInterface

    newBooking = {
      id: edit?data.id:
        ''+
          data.tourDate.getDate()+
          bookingsState.bookings.length+
          data.tour.split(' ')[0],
      tour: data.tour,
      nTravelers: data.nTravelers,
      tourDate: data.tourDate.toLocaleDateString(),
      bookingDate: data.bookingDate.toLocaleDateString(),
      state: data.state,
      customer: {
        nDoc: data.nDoc,
        name: data.name,
        phone: data.phone,
        email: data.email
      }
    }
    
    edit
      ?editBooking(newBooking)
      :addBooking(newBooking)
    
    // Mensaje de booking guardado correctamente
    ToastAndroid.show(
      newBooking.tour+'-'+newBooking.customer.name+', se guardó correctamente con id: '+newBooking.id,
      ToastAndroid.LONG
    )
    //reestablecer customer values
    edit
      ?navigation.pop()
      :setData(booking)
  }

  return(
    <View
      style={{...styles.globalPadding}}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps = 'always'
      >
        {/* --------- Section Tour */}
        <View style={customStyles.section}>
          <Text style={customStyles.sectionTitle}>Datos del tour</Text>
          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Nombre:</Text>
            <View style={{...customStyles.inputContainer}}>
              <DropDown
                data={tours}
                onSelect={(text) => handleDataChange({name: 'tour', value: text})}
                value={data.tour}
                placeHolder='Nombre de tour'
                editable={true}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Nro personas: </Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={{...customStyles.input, width: 50}}
                placeholder="1"
                keyboardType="numeric"
                defaultValue={data.nTravelers}
                onChangeText={(text) => handleDataChange({name:'nTravelers', value: text})}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Fecha reserva: </Text>
            <View style={customStyles.inputContainer}>
              <DatePicker
                date={data.bookingDate}
                changeDate={(newDate) => handleDataChange({name: 'bookingDate', value: newDate})}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Fecha salida: </Text>
            <View style={customStyles.inputContainer}>
              <DatePicker
                date={data.tourDate}
                changeDate={(newDate) => handleDataChange({name: 'tourDate', value: newDate})}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Estado:</Text>
            <View style={{...customStyles.inputContainer}}>
              <DropDown
                data={states.map(state => state.name)}
                onSelect={(text) => handleDataChange({name: 'state', value: text})}
                value={data.state}
                placeHolder='Estado'
                editable={false}
              />
            </View>
          </View>
        </View>

        {/* --------- Section customer */}
        <View style={customStyles.section}>
          <Text style={customStyles.sectionTitle}>Dato de Cliente</Text>
          <View style={{...customStyles.itemContainer}}>
            <Text style={customStyles.label}>Nombre:</Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={customStyles.input}
                placeholder='Nombre'
                defaultValue={data.name}
                onChangeText={(text) => handleDataChange({name:'name', value: text})}
              />
            </View>
          </View>

          <View style={{...customStyles.itemContainer}}>
            <Text style={customStyles.label}>Documento:</Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={customStyles.input}
                placeholder='Documento'
                defaultValue={data.nDoc}
                onChangeText={(text) => handleDataChange({name:'nDoc', value:text})}
              />
            </View>
          </View>

          <View style={{...customStyles.itemContainer}}>
            <Text style={customStyles.label}>Telefono:</Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={customStyles.input}
                placeholder='Movil'
                defaultValue={data.phone}
                onChangeText={(text) => handleDataChange({name:'phone', value:text})}
                keyboardType= 'phone-pad'
              />
            </View>
          </View>

          <View style={{...customStyles.itemContainer}}>
            <Text style={customStyles.label}>Correro:</Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={customStyles.input}
                placeholder='Email'
                defaultValue={data.email}
                onChangeText={(text) => handleDataChange({name:'email', value:text})}
              />
            </View>
          </View>
        </View>

        {/* --------- Section customer*/}
        <View style={{...customStyles.section, marginBottom:0}}>
          <View style={{...customStyles.itemContainer, justifyContent:'flex-end'}}>
            <Pressable
              onPress={saveBooking}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                  ? colores.acentoPress
                  : colores.acento
                },
                customStyles.button
              ]}
            >
              {({ pressed }) => (
                <Text style={customStyles.buttonText}>Guardar</Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const customStyles = StyleSheet.create({
  section:{
    marginBottom: 40
  },
  sectionTitle:{
    ...styles.subtitle,
    color: colores.secondary
  },
  itemContainer:{
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer:{
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: 50,
    borderRadius: 6,
    width: 230,
  },
  input:{
    ...styles.input,
  },
  label:{
    ...styles.text,
    fontSize: 16
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colores.primary
  }
})