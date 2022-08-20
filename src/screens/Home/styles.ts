import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    fontFamily: "Inter-Regular",
  },

  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minHeight: "90%",
  },

  emptyListText: {
    color: "#FFFFFF",
    marginTop: 20,
  },

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
});
