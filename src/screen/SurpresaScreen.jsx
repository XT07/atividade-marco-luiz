import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";
import HomeScreen from "./HomeScreen";

export default function SurpresaScreen( {navigation} ){
    return(
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', }}>
                <Text style={styles.txt}>
                    Olá
                </Text>
                <Button
                    mode="contained"
                    style={styles.btn}>
                    Outra tela
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
    )
}