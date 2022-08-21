import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookingScreen } from '../screens/BookingScreen';
import { Tabs } from './Tabs'

export type RootStackParams = {
  Tabs: undefined,
  Booking: { id: string },
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
          cardStyle: {
            backgroundColor: 'white',
          },
          headerShown: false
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}