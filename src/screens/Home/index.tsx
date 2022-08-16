import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { Status } from "../../components/Status";
import { styles } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <Status creates={10} dones={5} />
    </View>
  );
};
