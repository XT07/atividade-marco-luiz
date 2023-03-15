import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "../utils/style";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 3000);

  return (
    <View style={styles.load}>
      <ActivityIndicator style = {styles.loadIcon}/>
      <Text style = {{ marginTop: 5 }}>Carregando página ...</Text>
    </View>
  );
}
