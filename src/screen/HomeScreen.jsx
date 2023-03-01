import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";
import SobreScreen from "./SobreScreen";

export default function HomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.txt}>Bem vindo a home screen</Text>
            <Button mode="contained"
                onPress={() => {navigation.navigate(SobreScreen)}}
                style={styles.btn}>
                Ir para o sobre
            </Button>
        </View>
    </View>
  );
}
