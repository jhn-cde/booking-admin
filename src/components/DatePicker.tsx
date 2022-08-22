import { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import { format } from 'date-fns'
import { colores } from "../theme/appTheme";

interface params{
  name: string,
  value: Date | undefined
}
interface Props{
  name: string,
  date: Date,
  handleChange: ({name, value}: params) => void
}

export const DatePicker = ({name, date, handleChange}: Props) => {
  
  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    handleChange({name, value: currentDate});
  }

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  return(
    <TouchableOpacity
      onPress={showDatepicker}
    >
      <Text style={customStyles.dateContent}>
        {format(date, 'd MMM, y')}  <Icon
          name="calendar-outline"
          color={colores.secondary}
          size={20}
        />
      </Text>
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
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