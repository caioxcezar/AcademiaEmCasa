import React, { Fragment, useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

import styles from "./FazerExerciciosStyle";

export default FazerExercicios = ({ navigation, route }) => {
  let interval;
  const [values, setValues] = useState({
    ficha: route.params.ficha,
    exercicioAtual: 0,
  });

  const [icon, setIcon] = useState("controller-play");
  const [segundos, setSegundos] = useState(30);
  const [minutos, setMinutos] = useState(1);

  useEffect(() => {
    navigation.setOptions({
      title: "Exercicios da Ficha " + route.params.ficha.nome,
    });
    return () => clearInterval(interval);
  }, []);

  timerAction = () => {
    if (icon == "controller-play") {
      setIcon("stopwatch");
      interval = setInterval(() => {
        //testando a execução do timer
        console.log("timer");
        setSegundos((segundos) => segundos - 1);
      }, 1000);
    } else {
      //setIcon("controller-play");
      //clearInterval não esta funcionando
      clearInterval(interval);
    }
  };

  cardExercicio = (ex) => (
    <Card style={styles.card} key={ex.id}>
      <Card.Title>
        <View style={styles.title}>
          <Text style={styles.titleText}>{ex.nome}</Text>
          <Text style={styles.addExercicios}>
            {values.ficha.exercicios.length - 1 != values.exercicioAtual ? (
              <Pressable
                onPress={() =>
                  setValues({
                    ...values,
                    exercicioAtual: values.exercicioAtual + 1,
                  })
                }
              >
                <Entypo name="controller-next" size={24} color="black" />
              </Pressable>
            ) : (
              ""
            )}
          </Text>
        </View>
      </Card.Title>
      <View key={ex.id} style={styles.exercicio}>
        <Image style={styles.imagem} resizeMode="cover" source={ex.imagem} />
        <Text style={styles.descricao}>{ex.descricao}</Text>
      </View>
      <View style={styles.timer}>
        <Pressable
          onPress={() => {
            timerAction();
          }}
        >
          <Entypo name={icon} size={30} color="black" />
        </Pressable>
        <Text>{minutos + ":" + segundos}</Text>
      </View>
    </Card>
  );

  return (
    <Fragment>
      {cardExercicio(values.ficha.exercicios[values.exercicioAtual])}
    </Fragment>
  );
};
