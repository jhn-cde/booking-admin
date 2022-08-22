import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';

import { customerDataInterface } from "../helpers/getCustomers"
import { colores, styles } from "../theme/appTheme"

interface itemInterface extends customerDataInterface{
  navigateTo: (id:string) => void
}

export const CustomerItem = ({name, nDoc, phone, email, tours, navigateTo}: itemInterface) => {
  
  const navigate = (id: string) => {
    navigateTo(id)
  }

  return(
    <View style={customStyles.container}>
      <Text style={customStyles.name}>{name}</Text>
      <Text style={{...styles.text, fontSize: 14, fontWeight: '500'}} selectable={true}>
        <Icon name="call-outline"/> {phone}
      </Text>
      <Text style={{...styles.text, fontSize: 14, fontWeight: '500'}} selectable={true}>
        <Icon name="mail-outline"/> {email}
      </Text>
      <View style={{...customStyles.content, marginTop: 10,}}>
        <View>
          <Text style={styles.text}>Tours pendientes</Text>
          <View style={{...customStyles.content, justifyContent: 'flex-start'}}>
            {tours.filter(tour => tour.state==='Pendiente').map(tour => {
              return (
              <View key={tour.id} style={{marginRight: 10}}>
                <TouchableOpacity
                  onPress={() => navigate(tour.id)}
                >
                  <Text style={customStyles.tourText}>
                    {tour.name}
                  </Text>
                </TouchableOpacity>
              </View>)
            })}
          </View>
        </View>
        <View style={{marginRight: 5}}>
          <Text style={styles.text}>Total</Text>
          <Text style={{...styles.text, textAlign: 'right'}}>{tours.length}</Text>
        </View>
      </View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    marginVertical: 4,
    paddingVertical: 4,
    borderBottomColor: colores.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  name:{
    color: colores.secondary,
    fontWeight: '500',
    fontSize: 20,
  },
  content:{
    flexDirection: 'row',
    fill: 1,
    justifyContent: 'space-between'
  },
  tourText:{
    ...styles.text,
    color: colores.acento,
    fontSize: 14,
    fontWeight: '600'
  },
})