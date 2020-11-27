import React from "react";
import { View } from "react-native";
import styles from "./FichaStyle";
import { Picker } from "@react-native-picker/picker";
import { Button, Text, Input } from "react-native-elements";
import FichaModel from "../../model/Ficha";
import { setFicha } from "../../AppAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Ficha extends React.Component {
  state = {
    nome: "",
    agrupamento: "",
    exercicio: "",
    exercicios: [],
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
  salvar = () => {
    let { nome, exercicios } = this.state;
    setFicha(new FichaModel(this.props.fichas.length, nome, exercicios));
  };
  render() {
    let { tpAcao, agrupamento, exercicio } = this.state;
    return (
      <View style={styles.container}>
        <Text>Nome: </Text>
        <Input
          keyboardType="numeric"
          onChangeText={(text) => {
            this.setState({ nome: text });
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
function mapStateToProps(state) {
  return {
    fichas: state.fichas,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setFicha }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Ficha);
