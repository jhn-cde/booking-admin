import { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import { format } from 'date-fns'
import { colores } from "../theme/appTheme";

interface Props{
  date: Date,
  changeDate: (value: Date | undefined) => void
}

export const DatePicker = ({date, changeDate}: Props) => {
  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    changeDate(currentDate);
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
      activeOpacity={0.5}
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