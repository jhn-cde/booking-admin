import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen } from '../screens/BookingScreen';
import { Tabs } from './Tabs'

export type RootStackParams = {
  Tabs: undefined,
  Booking: { id: string },
}

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
  );
}