import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { colores, styles } from "../theme/appTheme"

import { Header } from "../components/Header"
import { CustomersList } from "../components/CustomersList";
import { SearchBar } from "../components/SearchBar";
import { TextProvider } from "../context/TextContext";

type Props = NativeStackScreenProps<RootStackParams, 'Tabs'>;

const CustomersScreen = ({navigation}: Props) => {
  const {top: paddingTop} = useSafeAreaInsets()

  const navigateTo = (id: string) => {
    navigation.navigate('Booking', {id: id})
  }

  return (
    <View
      style={{
        ...styles.globalPadding, 
        paddingTop,
        backgroundColor: colores.primary,
        flex: 1
      }}
    >
      <Header title={'Clientes'}>
        <SearchBar />
      </Header>
      
      <CustomersList navigateTo={navigateTo}/>

    </View>
  )
}

export const CustomersScreenState = ({route, navigation}: Props) => {
  return(
    <TextProvider>
      <CustomersScreen route={route} navigation={navigation}/>
    </TextProvider>
  )
}