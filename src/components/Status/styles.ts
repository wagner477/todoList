import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -50,
    padding: 20,
  },

  formInput: {
    backgroundColor: "#262626",
    height: 54,
    flex: 1,
    marginRight: 4,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    color: "#F2F2F2",
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6D9F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    color: "#FFFFFF",
    fontSize: 24,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },

  statusContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    height: 35,
    width: "90%",

    marginLeft: 20,

    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },

  createBox: {
    flexDirection: "row",
    justifyContent: "center",
  },

  createBoxText: {
    fontSize: 20,
    marginRight: 4,
    color: "#4EA8DE",
  },

  createBoxValue: {
    fontSize: 20,
    color: "#fff",
  },

  doneBox: {
    flexDirection: "row",
    justifyContent: "center",
  },

  doneBoxText: {
    fontSize: 20,
    marginRight: 4,
    color: "#8284FA",
  },

  doneBoxValue: {
    fontSize: 20,
    color: "#fff",
  },
});
