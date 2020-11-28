import React, { Fragment, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./HomeStyle";
import { AntDesign } from "@expo/vector-icons";
import Fichas from "../fichas/Fichas";
import Exercicios from "../exercicios/Exercicios";

export default Home = ({ navigation }) => {
  const [values, setValues] = useState({
    tabFichas: [styles.colSm, styles.colSmSelected],
    tabExercicios: [styles.colSm],
    tabCurrent: [],
  });
  useEffect(() => currentTab(0), []);
  currentTab = (tab) => {
    switch (tab) {
      case 0:
        setValues({
          ...values,
          tabFichas: [styles.colSm, styles.colSmSelected],
          tabExercicios: [styles.colSm],
          tabCurrent: <Fichas />,
        });
        break;
      case 1:
        setValues({
          ...values,
          tabFichas: [styles.colSm],
          tabExercicios: [styles.colSm, styles.colSmSelected],
          tabCurrent: <Exercicios />,
        });
        break;
      default:
        setValues({ ...values });
    }
  };
  return (
    <Fragment>
      <View style={styles.container}>
        {values.tabCurrent}
        <View style={styles.buttom}>
          <AntDesign
            name="pluscircle"
            size={65}
            color="#d14048"
            onPress={() => navigation.navigate("Ficha", { tpAcao: "Salvar" })}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Pressable style={values.tabFichas} onPressIn={() => currentTab(0)}>
          <Text>Fichas</Text>
        </Pressable>
        <Pressable style={values.tabExercicios} onPressIn={() => currentTab(1)}>
          <Text>Exercicios</Text>
        </Pressable>
      </View>
    </Fragment>
  );
};
