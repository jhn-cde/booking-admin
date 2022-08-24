import { useContext, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from "react-native"
import { BookingsContext } from "../context/BookingsContext"
import { bookingTourInterface } from "../helpers/getCustomers"
import { colores, styles } from "../theme/appTheme"

interface Props{
  tours: bookingTourInterface[],
  navigate: (id: string) => void
}

export const ToursScrollView = ({tours, navigate}:Props) => {
  const [curState, setCurState] = useState({name:'', color: colores.secondary})

  const { bookingsState } = useContext(BookingsContext)

  return (
    <View style={{maxWidth: '80%'}}>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {[{name:'', color: colores.secondary}, ...bookingsState.states].map(state =>
          <TouchableOpacity
            key={state.name}
            onPress={() => setCurState(state)}
            style={customStyles.stateContainer}
          >
            <Text style={{
              ...customStyles.stateText,
              color: state.color,
              borderColor: state.color,
              borderBottomWidth: state.name===curState.name?0:StyleSheet.hairlineWidth
            }}>
              {state.name===''?'Todo':state.name}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{marginTop: 14}}>
        {tours.filter(tour => tour.state.includes(curState.name)).map(tour => {
          return (
            <View
              key={tour.id}
              style={{
                ...customStyles.tourContainer,
                backgroundColor: curState.name===''?bookingsState.states.filter(item => item.name===tour.state)[0].color:curState.color,
              }}>
            <TouchableOpacity
              key={tour.id}
              onPress={() => navigate(tour.id)}
              style={{justifyContent: 'center', alignItems: 'center'}}

              activeOpacity={0.5}
            >
                <Text style={{...customStyles.tourText}}>
                  {tour.name}
                </Text>
            </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const customStyles = StyleSheet.create({
  stateContainer:{
    marginRight: 10,
  },
  stateText:{
    ...styles.text,
    fontSize: 12,
    fontWeight: '600',
  },
  tourContainer:{
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 50,
    marginRight: 5,
  },
  tourText:{
    ...styles.text,
    fontSize: 14,
    color: colores.primary
  },
})