import { StatusBar, Text, View, Switch, Button } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import { makeTheme } from "../../utils/utils";
import { AntDesign } from "@expo/vector-icons";

export default class Header extends React.Component {
  state = {
    tittle: "",
    theme: "Ligth",
  };
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  onPressLearnMore() {}
  buttomColor = () => {
    this.state.theme === "Dark" ? "#fff" : "#010101";
  };
  toggleSwitch = () => {
    if (this.state.theme === "Dark") this.setState({ theme: "Ligth" });
    else this.setState({ theme: "Dark" });
  };
  render() {
    return (
      <View style={makeTheme(styles, "header", this.state.theme)}>
        <AntDesign
          name="leftcircle"
          size={65}
          color={this.state.theme === "Dark" ? "#fff" : "#010101"}
        />
        <Text style={makeTheme(styles, "font", this.state.theme)}>
          {this.state.tittle}
        </Text>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.theme === "Dark" ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch}
            value={this.state.theme === "Dark"}
          />
        </View>

        <StatusBar barStyle="default" translucent={false} />
      </View>
    );
  }
}
