import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { DropDown, dropdownInterface } from "../components/DropDown";
import { bookingInterface } from "../data/bookings";
import { colores, styles } from "../theme/appTheme";

const data = [
  {id: 1, name: 'Manu'},
  {id: 2, name: 'Tambopata'},
  {id: 3, name: 'Machupicchu'},
  {id: 4, name: 'Cusco'},
]

export const AddBookingScreen = (booking?: bookingInterface) => {
  const [selectedTour, setSelectedTour] = useState(data[0])
  const [nroPersonas, setNroPersonas] = useState('1')

  const onSelect = (val: dropdownInterface) => {
    setSelectedTour(val)
  }
  return(
    <View
      style={{...styles.globalPadding}}
    >
      <View>
        <Text>tamo de vuelta</Text>
      </View>
      
      <View>
        <DropDown data={data} onSelect={onSelect} value={selectedTour} placeHolder='Nombre de tour'/>
      </View>

      <View>
        <Text>Número de personas: </Text>
        <TextInput
          placeholder="1"
          keyboardType="numeric"
          defaultValue={nroPersonas}
          onChange={() => setNroPersonas}
        />
      </View>
    </View>
  )
}