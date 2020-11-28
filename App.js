import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import store from "./Store";
import Home from "./components/home/Home";
import Ficha from "./components/ficha/Ficha";
import FazerExercicios from "./components/fazerExercicios/FazerExercicios";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{ title: "Pagina Inicial" }}
                component={Home}
              />
              <Stack.Screen name="Ficha" component={Ficha} />
              <Stack.Screen
                name="FazerExercicios"
                component={FazerExercicios}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
