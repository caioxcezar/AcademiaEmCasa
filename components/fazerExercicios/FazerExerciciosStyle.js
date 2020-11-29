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
  card: { flex: 1 },
  timer: {
    //flex: 1,
    margin: 15,
    alignItems: "center",
  },
});
