import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Icon from '@expo/vector-icons/Ionicons';
import { format } from 'date-fns'

import { colores, styles } from "../theme/appTheme"
import { useState } from "react";

interface Props {
  title: String
}

export const Header = ({title}: Props) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event: object, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };
  
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
      <TouchableOpacity
        onPress={showDatepicker}
        style={headerStyles.date}
      >
        <Text style={headerStyles.dateContent}>
          {format(date, 'd MMM, y')}  <Icon
            name="calendar-outline"
            color={colores.secondary}
            size={20}
          />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container:{
    flex: 1,
    paddingVertical: 10,
  },
  title:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5
  },
  dateContent:{
    fontSize: 17,
    borderBottomColor: colores.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})