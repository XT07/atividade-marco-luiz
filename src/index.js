import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import SobreScreen from "./screen/SobreScreen";
import SurpresaScreen from "./screen/SurpresaScreen";
import styles from "./utils/style";


const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer style={styles.nsv}>
      <Stack.Navigator>
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Tela Inicial'
        }}
        />
        <Stack.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          title: 'Tela de Sobre'
        }}
        />
        <Stack.Screen 
        name='SurpresaScreen'
        component={SurpresaScreen}
        options={{
          title: 'Surpresa Screen'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
