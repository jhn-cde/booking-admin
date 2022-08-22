import { useContext } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { TextContext } from "../context/TextContext"
import { getCustomers } from "../helpers/getCustomers"
import { CustomerItem } from "./CustomerItem"

interface Props{
  navigateTo: (id: string) => void
}

export const CustomersList = ({navigateTo}: Props) => {
  const { textState } = useContext(TextContext)

  const customers = getCustomers(textState.curText)
  return(
    <View style={customStyles.container}>
      <FlatList
        data={customers}
        keyExtractor={customer => customer.nDoc}
        renderItem={({item}) => (
          <View
            key={item.nDoc}
            style={{marginBottom: 20}}
          >
            <CustomerItem {...item} navigateTo={navigateTo}/>
          </View>
        )} 
      />
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