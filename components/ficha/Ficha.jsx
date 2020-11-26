import React from "react";
import { View } from "react-native";
import styles from "./FichaStyle";
import { Picker } from "@react-native-picker/picker";
import { Button, Text, Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FichaModel from "../../model/Ficha";

class Ficha extends React.Component {
  state = {
    agrupamento: "",
    exercicio: "",
    carga: "",
    series: "",
    repeticoes: "",
    key: null,
    tpAcao: "",
  };
  constructor(props) {
    super(props);
    this.state.tpAcao = this.props.route.params.tpAcao;
  }
  onlyNumeric = (text) => [...text].map((e) => (isNaN(e) ? "" : e)).join("");
  listAgrupamento = () => {
    const list = ["Peito", "Braço", "Perna"];
    return list.map((e, index) => (
      <Picker.Item key={index} label={e} value={e} />
    ));
  };
  listExercicios = () => {
    const list = ["Exercicio 1", "Exercicio 2"];
    return list.map((e, index) => (
      <Picker.Item key={index} label={e} value={e} />
    ));
  };
  salvar = async () => {
    let { agrupamento, exercicio, carga, series, repeticoes } = this.state;
    let ficha = new FichaModel(
      2,
      agrupamento,
      exercicio,
      nome,
      series,
      repeticoes
    );
    //await AsyncStorage.mergeItem("exercicios", JSON.stringify([ficha]));
    console.log(JSON.stringify(ficha));
  };
  render() {
    let { tpAcao, agrupamento, exercicio } = this.state;
    return (
      <View style={styles.container}>
        <Text>Nome: </Text>
        <Input
          keyboardType="numeric"
          onChangeText={(text) => {
            this.setState({ nome: this.onlyNumeric(text) });
          }}
          value={this.state.nome}
        />
        <Text>Agrupamento Muscular: </Text>
        <Picker
          selectedValue={agrupamento}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ agrupamento: itemValue })
          }
        >
          {this.listAgrupamento()}
        </Picker>
        <Text>Tipos de Exercicios: </Text>
        <Picker
          selectedValue={exercicio}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exercicio: itemValue })
          }
        >
          {this.listExercicios()}
        </Picker>
        <View style={{ flex: 1 }}>
          <Text>Lista</Text>
        </View>
        <View style={styles.buttom}>
          <Button title={tpAcao} onPress={this[tpAcao.toLocaleLowerCase()]} />
        </View>
      </View>
    );
  }
}
export default Ficha;
