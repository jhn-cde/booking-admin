import { ScrollView, StyleSheet, Text, View } from "react-native"
import { bookings } from "../data/bookings"
import { getCustomers } from "../helpers/getCustomers"
import { CustomerItem } from "./CustomerItem"

interface Props{
  navigateTo: (id: string) => void
}

export const CustomersList = ({navigateTo}: Props) => {
  const customers = getCustomers()
  return(
    <View style={customStyles.container}>
      <ScrollView>
        {
          customers.map(
            (customer, index) => {
              return(
                <View
                  key={customer.nDoc}
                  style={{marginTop: index === 0 ?0 :10}}
                >
                  <CustomerItem {...customer} navigateTo={navigateTo}/>
                </View>
            )}
          )
        }
      </ScrollView>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    flex:1, 
    flexDirection: 'row', 
    alignItems: 'flex-end'
  }
})