import { Image, View } from "react-native";
import { styles } from "./styles";

export const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/Logo.png")}
      />
    </View>
  );
};
