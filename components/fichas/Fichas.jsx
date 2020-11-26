import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Ficha from "../../model/Ficha";

export default class Fichas extends React.Component {
  state = {
    fichas: [],
  };
  constructor(props) {
    super(props);
    this.loadFichas();
  }
  async loadFichas() {
    let fichas = [];
    //await AsyncStorage.clear();
    try {
      fichas = JSON.parse(await AsyncStorage.getItem("exercicios"));
      if (fichas) {
        this.setState({
          fichas: fichas.map((e) => new Ficha(e._id, e._nome, e._exercicios)),
        });
      }
    } catch (e) {
      Alert.alert("Atenção", `Erro: ${erro.message}`);
    }
  }
  componentDidMount() {}
  render() {
    let { fichas } = this.state;
    return (
      <ScrollView>
        {fichas.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.id + " " + l.nome}</ListItem.Title>
              <ListItem.Subtitle>
                {"Quantidade de Exercicios: " + l.exercicios.length}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  }
}
