import { NavigationContainer } from '@react-navigation/native';
import { BookingsProvider } from './src/context/BookingsContext';
import { StackNavigator } from './src/navigator/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BookingsProvider>
        <StackNavigator />
      </BookingsProvider>
    </NavigationContainer>
  );
}
