import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";
import SobreScreen from "./SobreScreen";

export default function HomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.txt}>Bem vindo ao Direct-X</Text>
            <Button mode="contained"
                onPress={() => {navigation.navigate(SobreScreen)}}
                style={styles.btn}>
                Ir para o sobre
            </Button>
            <Image
              source={{
                uri:('https://files.meiobit.com/wp-content/uploads/2022/06/max-bender-XIVDN9cxOVc-unsplash-2048x1367.jpg')
              }}
              style={{
                marginTop: 20,
                width: 400,
                height: 400
              }}
            />
            <Text style={styles.txt}>O hacker sem fio</Text>
        </View>
    </View>
  );
}
