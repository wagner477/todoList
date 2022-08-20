import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { Status } from "../../components/Status";
import { Task } from "../../components/Task";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Task = {
  text: string;
  end: boolean;
};

export const Home = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([
    { text: "Fazer o café", end: false },
    { text: "Estudar React Native", end: false },
    { text: "Estudar React", end: false },
    { text: "Estudar TypeScript", end: false },
  ]);
  const [taskText, setTaskText] = useState("");

  console.log(tasks);

  const handleTaskRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover a tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(tasks.filter((task) => task.text !== name));
          Alert.alert("Deletado");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  // const handleTaskDone = (name: string) => {
  //   setTasks(
  //     tasks.map((task) => (task.text === name ? { ...task, end: true } : task))
  //   );
  // };

  // Handle task done true or false
  const handleTaskDone = (name: string) => {
    setTasks(
      tasks.map((task) =>
        task.text === name ? { ...task, end: !task.end } : task
      )
    );
  };

  // const handleTaskCreate = () => {
  //   if (taskText.trim()) {
  //     setTasks([...tasks, { text: taskText, end: false }]);
  //     setTaskText("");
  //     Keyboard.dismiss();
  //   } else {
  //     Alert.alert("Erro", "Digite uma tarefa válida");
  //   }
  // };

  // Handle task create

  // Criar uma tarefa se ela não existir ou ou se ela não for vazia
  const handleTaskCreate = () => {
    if (tasks.find((task) => task.text === taskText)) {
      Alert.alert("Erro", "Tarefa já cadastrada");
      Keyboard.dismiss();
      return;
    }

    if (taskText.trim() === "") {
      Alert.alert("Erro", "Digite uma tarefa válida");
      Keyboard.dismiss();
      setTaskText("");
      return;
    }

    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, end: false }]);
      setTaskText("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskText}
          value={taskText}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskCreate}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* somar quantas tasks done: true */}
      <Status
        creates={tasks.length}
        dones={tasks.filter((task) => task.end).length}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <Task
            key={item.text}
            text={item.text}
            onRemove={() => handleTaskRemove(item.text)}
            onCheck={() => handleTaskDone(item.text)}
            {...(item.end ? { checked: true } : { checked: false })}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <FontAwesome name="pencil" size={80} color="#fff" />
            <Text style={styles.emptyListText}>Sua lista está vazia</Text>
          </View>
        )}
      />
    </View>
  );
};
