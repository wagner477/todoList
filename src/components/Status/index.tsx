import { Fragment } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface IStatusValues {
  creates: number;
  dones: number;
}

export const Status = ({ creates, dones }: IStatusValues): JSX.Element => {
  return (
    <Fragment>
      <View style={styles.statusContainer}>
        <View style={styles.createBox}>
          <Text style={styles.createBoxText}>Criadas</Text>
          <Text style={styles.createBoxValue}>{creates}</Text>
        </View>

        <View style={styles.doneBox}>
          <Text style={styles.doneBoxText}>Concluídas</Text>
          <Text style={styles.doneBoxValue}>{dones}</Text>
        </View>
      </View>
    </Fragment>
  );
};
