import React, { Fragment, useEffect, useRef, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

import styles from "./FazerExerciciosStyle";

export default FazerExercicios = ({ navigation, route }) => {
  const intervalRef = useRef();

  const [icon, setIcon] = useState("controller-play");
  const [segundos, setSegundos] = useState(30);
  const [minutos, setMinutos] = useState(1);
  let varMinutos = minutos;
  let varSegundos = segundos;

  const [values, setValues] = useState({
    ficha: route.params.ficha,
    exercicioAtual: 0,
  });

  useEffect(() => {
    navigation.setOptions({
      title: "Exercicios da Ficha " + route.params.ficha.nome,
    });
    return () => clearInterval(intervalRef.current);
  }, []);

  timerAction = () => {
    if (icon == "controller-play" && (segundos > 0 || minutos > 0)) {
      setIcon("stopwatch");
      const id = setInterval(() => {
        if (varSegundos > 0) {
          setSegundos(() => --varSegundos);
        } else if (varMinutos > 0) {
          setMinutos(() => --varMinutos);
          varSegundos = 59;
          setSegundos(() => varSegundos);
        } else nextCard();
      }, 1000);
      intervalRef.current = id;
    } else {
      stopInterval();
    }
  };

  stopInterval = () => {
    setIcon("controller-play");
    clearInterval(intervalRef.current);
  };

  resetInterval = () => {
    stopInterval();
    setMinutos(1);
    setSegundos(30);
  };

  nextCard = () => {
    if (values.ficha.exercicios.length - 1 != values.exercicioAtual) {
      resetInterval();
      setValues({
        ...values,
        exercicioAtual: values.exercicioAtual + 1,
      });
    }
  };

  cardExercicio = (ex) => (
    <Card style={styles.card} key={ex.id}>
      <Card.Title>
        <View style={styles.title}>
          <Text style={styles.titleText}>{ex.nome}</Text>
          <Text style={styles.addExercicios}>
            {values.ficha.exercicios.length - 1 != values.exercicioAtual ? (
              <Pressable onPress={() => nextCard()}>
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
