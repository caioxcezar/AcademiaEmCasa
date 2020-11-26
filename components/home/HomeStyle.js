import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttom: {
    bottom: 75,
    right: 15,
    height: 1,
    position: "absolute",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    //IOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    //Android Shadow
    elevation: 24,
  },
  colSm: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 15,
  },
  colSmSelected: {
    borderBottomWidth: 6,
    borderColor: "#7CCCDE",
  },
  ficha: {
    backgroundColor: "red",
    width: 1,
  },
});
