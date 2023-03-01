import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";
import HomeScreen from "./HomeScreen";
import SurpresaScreen from "./SurpresaScreen";

export default function SobreScreen( {navigation} ) {
  return (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center", }}>
            <Text style={styles.txt}>Bem vindo ao sobre</Text>
            <Button
                mode="contained"
                onPress={() => {navigation.navigate(SurpresaScreen)}}
                style={styles.btn}>
                Ir para a surpresa screen
            </Button>
        </View>
        <View>
            <Button
            mode="contained"
            style={styles.btn}
            onPress={() => {navigation.navigate(HomeScreen)}}>
            Voltar a tela inicial
            </Button>
        </View>
    </View>
  );
}
