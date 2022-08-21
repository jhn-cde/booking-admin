import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { colores, styles } from "../theme/appTheme"

import { Header } from "../components/Header"

type Props = NativeStackScreenProps<RootStackParams, 'Tabs'>;

const CustomersScreen = ({navigation}: Props) => {
  const {top: paddingTop} = useSafeAreaInsets()
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
        {}
      </Header>
    </View>
  )
}

export const CustomersScreenState = ({route, navigation}: Props) => {
  return(
    <CustomersScreen route={route} navigation={navigation}/>
  )
}