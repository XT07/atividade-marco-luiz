import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";

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
        </View>
    )
}