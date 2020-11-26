import React from "react";
import { View } from "react-native";

class Exercicio extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    id: 1,
    name: "um nome",
  };
  render() {
    return (
      <View>
        <Text>TODO</Text>
      </View>
    );
  }
}
export default Exercicio;
