import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { DropDown } from "../components/DropDown";
import { bookingInterface, customerInterface } from "../data/bookings";
import { colores, styles } from "../theme/appTheme";
import { useForm } from "../hooks/useForm";
import { DatePicker } from "../components/DatePicker";
import { useContext } from "react";
import { BookingsContext } from "../context/BookingsContext";

const tours = [
  'Manu',
  'Tambopata',
  'Machupicchu',
  'Cusco',
]
const states = [
  'Pendiente',
  'Finalizado',
  'Cancelado',
]

export const AddBookingScreen = (booking?: bookingInterface) => {
  const [tour, handleTourChange] = useForm({
    id: 'id',
    tour: tours[0],
    nTravelers: 1,
    bookingDate: new Date(),
    tourDate: new Date(),
    state: states[0]
  })
  const [customer, handleCustomerChange] = useForm({
    nDoc: '',
    name: '',
    phone: '',
    email: ''
  })

  const { bookingsState, addBooking } = useContext(BookingsContext)

  const onTourSelect = (val: string) => {
    handleTourChange({name: 'tour', value: val})
  }

  const onStateSelect = (val: string) => {
    handleTourChange({name: 'state', value: val})
  }

  const changeBookingDate = (newDate: Date | undefined) => {
    console.log('dada1' ,newDate)
    handleTourChange({name: 'bookingDate', value: newDate});
  }

  const changeTourDate = (newDate: Date | undefined) => {
    console.log('dada2' ,newDate)
    handleTourChange({name: 'tourDate', value: newDate});
  }

  const saveBooking = () => {
    let newBooking: bookingInterface
    let customerData: customerInterface = customer
    newBooking = {
      id: ''+tour.tourDate.getDate()+bookingsState.bookings.length+tour.tour.split(' ')[0],
      tour: tour.tour,
      nTravelers: tour.nTravelers,
      tourDate: tour.tourDate.toLocaleDateString(),
      bookingDate: tour.bookingDate.toLocaleDateString(),
      state: tour.state,
      customer: customerData
    }
    addBooking(newBooking)
  }

  return(
    <View
      style={{...styles.globalPadding}}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* --------- Section Tour */}
        <View style={customStyles.section}>
          <Text style={customStyles.sectionTitle}>Datos del tour</Text>
          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Nombre:</Text>
            <View style={{...customStyles.inputContainer}}>
              <DropDown
                data={tours}
                onSelect={onTourSelect}
                value={tour.tour}
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
                defaultValue={tour.nTravelers}
                onChangeText={(text) => handleTourChange({name:'nTravelers', value: text})}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Fecha reserva: </Text>
            <View style={customStyles.inputContainer}>
              <DatePicker
                date={tour.bookingDate}
                changeDate={changeBookingDate}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Fecha salida: </Text>
            <View style={customStyles.inputContainer}>
              <DatePicker
                date={tour.tourDate}
                changeDate={changeTourDate}
              />
            </View>
          </View>

          <View style={customStyles.itemContainer}>
            <Text style={customStyles.label}>Estado:</Text>
            <View style={{...customStyles.inputContainer}}>
              <DropDown
                data={states}
                onSelect={onStateSelect}
                value={tour.state}
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
                defaultValue={customer.name}
                onChangeText={(text) => handleCustomerChange({name:'name', value: text})}
              />
            </View>
          </View>

          <View style={{...customStyles.itemContainer}}>
            <Text style={customStyles.label}>Documento:</Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={customStyles.input}
                placeholder='Documento'
                defaultValue={customer.nDoc}
                onChangeText={(text) => handleCustomerChange({name:'nDoc', value:text})}
              />
            </View>
          </View>

          <View style={{...customStyles.itemContainer}}>
            <Text style={customStyles.label}>Telefono:</Text>
            <View style={customStyles.inputContainer}>
              <TextInput
                style={customStyles.input}
                placeholder='Movil'
                defaultValue={customer.phone}
                onChangeText={(text) => handleCustomerChange({name:'phone', value:text})}
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
                defaultValue={customer.email}
                onChangeText={(text) => handleCustomerChange({name:'email', value:text})}
                keyboardType= 'email-address'
                caretHidden={false}
              />
            </View>
          </View>
        </View>

        {/* --------- Section customer*/}
        <View style={customStyles.section}>
          <View style={{...customStyles.itemContainer, justifyContent:'flex-end'}}>
            <Pressable
              onPress={saveBooking}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                  ? colores.acento2
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