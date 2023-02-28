import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function HomeScreen(){
    return(
        <View>
            <Text>
                Bem vindo a home screen !
            </Text>
            <Button mode="elevated" style={styles.btn} >Próxima screen</Button>
        </View>
    );
}

const styles = StyleSheet.create({

})