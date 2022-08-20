import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: "5%",
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 16,
  },

  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});
