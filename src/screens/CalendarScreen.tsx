import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from '@expo/vector-icons/Ionicons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns'

//componentes
import { colores, styles } from "../theme/appTheme"
import { FloatingButton } from "../components/FloatingButton"
import { BookingsList } from "../components/BookingsList"
import { Header } from "../components/Header"
import { DateContext, DateProvider } from "../context/DateContext";
import { RootStackParams } from "../navigator/StackNavigator";

type Props = NativeStackScreenProps<RootStackParams, 'Tabs'>;

const CalendarScreen = ({navigation}: Props) => {
  
  const { dateState, setDate } = useContext(DateContext)

  const navigateToBooking = (id: string) => {
    navigation.navigate('Booking', {id: id})
  }
  const navigateAddToBooking = () => {
    navigation.navigate('AddBooking')
  }

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
        <View style={customStyles.date}>
          <Text style={customStyles.text}>Reservas Pendientes</Text>
          <TouchableOpacity
            onPress={showDatepicker}
          >
            <Text style={customStyles.dateContent}>
              {format(dateState.curDate, 'd MMM, y')}  <Icon
                name="calendar-outline"
                color={colores.secondary}
                size={20}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </Header>
      
      <BookingsList navigateTo={navigateToBooking}/>
      <FloatingButton navigateTo={navigateAddToBooking}/>
    </View>
  )
}

export const CalendarScreenState = ({route, navigation}: Props) => {
  return (
    <DateProvider>
      <CalendarScreen route={route} navigation={navigation}/>
    </DateProvider>
  )
}

const customStyles = StyleSheet.create({
  text:{
    fontSize: 17,
  },
  date:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 0,
    paddingBottom: 30
  },
  dateContent:{
    fontSize: 17,
    borderBottomColor: colores.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})