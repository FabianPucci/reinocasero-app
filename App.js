import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import DrawerStack from "./src/navigation/DrawerStack";
import { NativeBaseProvider } from 'native-base';


export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <DrawerStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}