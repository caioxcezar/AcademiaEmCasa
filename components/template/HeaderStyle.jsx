import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 80,
    padding: 10,
  },
  headerDark: {
    backgroundColor: "#282828",
  },
  headerLigth: {
    backgroundColor: "#f4f4f4",
  },
  font: {
    padding: 5,
    fontSize: 20,
  },
  fontLigth: {
    color: "#010101",
  },
  fontDark: {
    color: "#fff",
  },
  switch: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
