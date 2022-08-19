import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import { CalendarScreen } from '../screens/CalendarScreen'
import { CustomersScreen } from '../screens/CustomersScreen'
import { NavigationContainer } from '@react-navigation/native';

export const Tabs = () => {
  return (
    <NavigationContainer>
      <TabsAndroid/>
    </NavigationContainer>
  )
}

const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return(
    <TabAndroid.Navigator>
      <TabAndroid.Screen
        name="CalendarScreen"
        component={CalendarScreen}
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