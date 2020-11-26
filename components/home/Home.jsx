import React, { Fragment } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./HomeStyle";
import { AntDesign } from "@expo/vector-icons";
import Fichas from "../fichas/Fichas";
import Exercicios from "../exercicios/Exercicios";

class Home extends React.Component {
  state = {
    tabFichas: [styles.colSm, styles.colSmSelected],
    tabExercicios: [styles.colSm],
    tabCurrent: [],
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.currentTab(0);
  }
  currentTab = (tab) => {
    switch (tab) {
      case 0:
        this.setState({
          tabFichas: [styles.colSm, styles.colSmSelected],
          tabExercicios: [styles.colSm],
          tabCurrent: <Fichas />,
        });
        break;
      case 1:
        this.setState({
          tabFichas: [styles.colSm],
          tabExercicios: [styles.colSm, styles.colSmSelected],
          tabCurrent: <Exercicios />,
        });
        break;
    }
  };
  /*
          
  */
  render() {
    let { tabFichas, tabExercicios, tabCurrent } = this.state;
    return (
      <Fragment>
        <View style={styles.container}>
          {tabCurrent}
          <View style={styles.buttom}>
            <AntDesign
              name="pluscircle"
              size={65}
              color="#d14048"
              onPress={() =>
                this.props.navigation.navigate("Ficha", { tpAcao: "Salvar" })
              }
            />
          </View>
        </View>
        <View style={styles.row}>
          <Pressable style={tabFichas} onPressIn={() => this.currentTab(0)}>
            <Text>Fichas</Text>
          </Pressable>
          <Pressable style={tabExercicios} onPressIn={() => this.currentTab(1)}>
            <Text>Exercicios</Text>
          </Pressable>
        </View>
      </Fragment>
    );
  }
}
export default Home;
