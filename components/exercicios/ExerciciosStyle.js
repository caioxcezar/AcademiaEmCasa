import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
    color: "#424242",
  },
  title: {
    flex: 1,
    width: 400,
    color: "#424242",
  },
  addExercicios: { right: 0, position: "absolute" },
  titleText: { alignSelf: "center" },
  exercicio: {},
  imagem: {
    alignSelf: "center",
    height: 200,
    width: 400,
    resizeMode: "stretch",
    marginBottom: 15,
  },
  descricao: {},

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
