import { useContext, useState } from "react";
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
import { DateContext, DateProvider } from "../context/DateContext";

export const CalendarScreen = () => {
  const { dateState, setDate } = useContext(DateContext)

  const onChange = (event: object, selectedDate: any) => {
    const currentDate = selectedDate;
    currentDate && setDate(currentDate);
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: dateState.curDate,
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
            {format(dateState.curDate, 'd MMM, y')}  <Icon
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

export const CalendarState = ({children}: any) => {
  return (
    <DateProvider>
      <CalendarScreen />
    </DateProvider>
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