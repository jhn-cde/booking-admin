import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen } from '../screens/BookingScreen';
import { AddBookingScreen } from '../screens/AddBookingScreen';
import { Tabs } from './Tabs'
import { colores, styles } from '../theme/appTheme';

export type RootStackParams = {
  Tabs: undefined,
  Booking: { id: string },
  AddBooking: undefined
}

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          contentStyle:{
            backgroundColor: colores.primary
          },
          headerShadowVisible: false,
          headerTitleStyle:{
            ...styles.title,
            color: colores.secondary
          },
        }
      }
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Booking" 
          component={BookingScreen}
          options={{title: ''}}
        />
        <Stack.Screen 
          name="AddBooking" 
          component={AddBookingScreen}
          options={{title: 'Nueva Reserva'}}
        />
      </Stack.Navigator>
  );
}