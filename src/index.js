import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import SobreScreen from "./screen/SobreScreen";
import SplashScreen from "./screen/SplashScreen";
import SurpresaScreen from "./screen/SurpresaScreen";
import styles from "./utils/style";

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
        }}/>
      <Tabs.Screen name="SobreScreen" component={SobreScreen} />
      <Tabs.Screen name="SurpresaScreen" component={SurpresaScreen} />
    </Tabs.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer style={styles.nsv}>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
