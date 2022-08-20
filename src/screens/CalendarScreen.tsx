import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colores, styles } from "../theme/appTheme"
import Icon from '@expo/vector-icons/Ionicons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns'

//componentes
import { FloatingButton } from "../components/FloatingButton"
import { BookingsList } from "../components/BookingsList"
import { Header } from "../components/Header"

export const CalendarScreen = () => {

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


  const {top: paddingTop} = useSafeAreaInsets()
  return (
    <View
      style = {{
        ...styles.globalPadding,
        paddingTop,
        backgroundColor: colores.primary,
        flex: 1
      }}
    >   
      <Header title='Calendario'>
        <TouchableOpacity
          onPress={showDatepicker}
          style={dateStyles.date}
        >
          <Text style={dateStyles.dateContent}>
            {format(date, 'd MMM, y')}  <Icon
              name="calendar-outline"
              color={colores.secondary}
              size={20}
            />
          </Text>
        </TouchableOpacity>
      </Header>
      
      <BookingsList />
      <FloatingButton />
    </View>
  )
}

const dateStyles = StyleSheet.create({
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