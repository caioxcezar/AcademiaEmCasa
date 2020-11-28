import React, { Fragment, useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

import styles from "./FazerExerciciosStyle";

export default FazerExercicios = ({ navigation, route }) => {
  const [values, setValues] = useState({
    ficha: route.params.ficha,
    exercicioAtual: 0,
  });

  const [timer, setTimer] = useState({
    icon: "controller-play",
    minutos: 1,
    segundos: 30,
  });

  useEffect(() => {
    navigation.setOptions({
      title: "Exercicios da Ficha " + route.params.ficha.nome,
    });
  }, []);

  timerAction = () => {
    if (timer.icon == "controller-play") {
      setTimer({
        ...timer,
        icon: "stopwatch",
      });
    } else {
      setTimer({
        ...timer,
        icon: "controller-play",
      });
    }
  };

  cardExercicio = (ex) => (
    <Card style={styles.card} key={ex.id}>
      <Card.Title>
        <Text>{ex.nome}</Text>
        <Text>
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
          <Entypo name={timer.icon} size={30} color="black" />
        </Pressable>
        <Text>{timer.minutos + ":" + timer.segundos}</Text>
      </View>
    </Card>
  );

  return (
    <Fragment>
      {cardExercicio(values.ficha.exercicios[values.exercicioAtual])}
    </Fragment>
  );
};
