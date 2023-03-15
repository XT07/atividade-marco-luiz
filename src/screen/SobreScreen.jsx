import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";
import SurpresaScreen from "./SurpresaScreen";

export default function SobreScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <View style = {styles.box}>
      <View style={{ flex: 1, alignItems: "center", }}>
            <Text style={styles.txt}>Bem vindo ao sobre</Text>
            <Button
                mode="contained"
                onPress={() => {navigation.navigate(SurpresaScreen)}}
                style={styles.btn}>
                Ir para a surpresa screen
            </Button>
            <Text style={styles.txtPr}>
              Em junho de 1903 Marconi 
              estava na Cornualha com seu 
              transmissor. A 300 km dali, 
              em Londres, Sir John Ambrose 
              Fleming, o inventor da válvula 
              de rádio operava um receptor 
              no teatro da Real Instituição 
              da Grã-Bretanha, “uma organização 
              dedicada à educação e investigação 
              científicas”. O objetivo era captar 
              a transmissão de Marconi, diante de 
              uma plateia de cientistas, 
              empresários e jornalistas.
            </Text>
            <Text style={styles.txtPr}>
            Bip bip biip bip, os sinais começam a chegar. 
            O assistente de Sir Fleming faz uma cara 
            estranha. Fleming olha a impressora Morse 
            acoplada ao receptor, e confirma: Várias 
            vezes repetida, a palavra “Ratos...”.
            </Text>
            <Text style={styles.txtPr}>
              Para mais informações vá para ( https://meiobit.com/458700/a-curiosa-historia-do-hacker-sem-fio/ )
            </Text>
        </View>
      </View>
    </View>
  );
}
