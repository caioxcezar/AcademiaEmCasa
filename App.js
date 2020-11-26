import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home/Home";
import Ficha from "./components/ficha/Ficha";

const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pagina Inicial" component={Home} />
          <Stack.Screen name="Ficha" component={Ficha} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
