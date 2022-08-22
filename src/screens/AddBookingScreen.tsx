import { StyleSheet, Text, TextInput, View } from "react-native";

import { DropDown } from "../components/DropDown";
import { bookingInterface } from "../data/bookings";
import { colores, styles } from "../theme/appTheme";
import { useForm } from "../hooks/useForm";
import { DatePicker } from "../components/DatePicker";

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
    nTravelers: 4,
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

  const onTourSelect = (val: string) => {
    handleTourChange({name: 'tour', value: val})
  }

  const onStateSelect = (val: string) => {
    handleTourChange({name: 'state', value: val})
  }

  return(
    <View
      style={{...styles.globalPadding}}
    >
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Datos del tour</Text>
        <View style={customStyles.itemContainer}>
          <Text style={customStyles.label}>Nombre:</Text>
          <View style={{...customStyles.inputContainer}}>
            <DropDown data={tours} onSelect={onTourSelect} value={tour.tour} placeHolder='Nombre de tour'/>
          </View>
        </View>

        <View style={customStyles.itemContainer}>
          <Text style={customStyles.label}>Nro personas: </Text>
          <View style={{...customStyles.inputContainer}}>
            <TextInput
              style={customStyles.input}
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
              name='bookingDate'
              date={tour.bookingDate}
              handleChange={handleTourChange}
            />
          </View>
        </View>


        <View style={customStyles.itemContainer}>
          <Text style={customStyles.label}>Fecha salida: </Text>
          <View style={customStyles.inputContainer}>
            <DatePicker
              name='tourDate'
              date={tour.tourDate}
              handleChange={handleTourChange}
            />
          </View>
        </View>


        <View style={customStyles.itemContainer}>
          <Text style={customStyles.label}>Estado:</Text>
          <View style={{...customStyles.inputContainer}}>
            <DropDown data={states} onSelect={onStateSelect} value={tour.state} placeHolder='Estado'/>
          </View>
        </View>
      </View>

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
    </View>
  )
}

const customStyles = StyleSheet.create({
  section:{
    marginBottom: 40
  },
  sectionTitle:{
    ...styles.subtitle
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
})