import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";

interface ITask {
  text: string;
  checked: boolean;
  onRemove: () => void;
  onCheck: () => void;
}

export const Task = ({
  text,
  onRemove,
  onCheck,
  checked,
}: ITask): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onCheck}>
        <Checkbox
          value={checked}
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.name}>{text}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <FontAwesome name="trash-o" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
