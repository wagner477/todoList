import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
