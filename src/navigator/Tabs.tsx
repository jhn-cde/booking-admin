import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';

import { CalendarScreenState } from '../screens/CalendarScreen'
import { CustomersScreenState } from '../screens/CustomersScreen'
import { colores } from '../theme/appTheme';
const TabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return(
    <TabAndroid.Navigator
      barStyle={{backgroundColor: colores.secondary}}
      sceneAnimationEnabled = {true}
    >
      <TabAndroid.Screen
        name="CalendarScreen"
        component={CalendarScreenState}
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          ),
        }}
      />
      <TabAndroid.Screen
        name="CustomersScreen"
        component={CustomersScreenState}
        options={{
          title: 'Clientes',
          tabBarIcon: ({ color }) => (
            <Icon name="people" color={color} size={26} />
          ),
        }}
      />
    </TabAndroid.Navigator>
  )
}