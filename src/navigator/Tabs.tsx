import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import { CalendarState } from '../screens/CalendarScreen'
import { CustomersScreen } from '../screens/CustomersScreen'
import { colores } from '../theme/appTheme';

export const Tabs = () => {
  return (
      <TabsAndroid/>
  )
}

const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return(
    <TabAndroid.Navigator
      barStyle={{backgroundColor: colores.secondary}}
      sceneAnimationEnabled = {true}
    >
      <TabAndroid.Screen
        name="CalendarScreen"
        component={CalendarState}
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          ),
        }}
      />
      <TabAndroid.Screen
        name="CustomersScreen"
        component={CustomersScreen}
        options={{
          title: 'Clientes',
          tabBarIcon: ({ color }) => (
            <Icon name="human-male-female" color={color} size={26} />
          ),
        }}
      />
    </TabAndroid.Navigator>
  )
}