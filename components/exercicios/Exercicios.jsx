import React, { Fragment, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { BottomSheet, Card, ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ExerciciosStyle";
import Agrupamentos from "../../data";
import { ScrollView } from "react-native-gesture-handler";
import { editFicha } from "../../AppAction";

export default Exercicios = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    agrupamentos: Agrupamentos,
    agrupamento: 0,
    exercicio: null,
  });
  const fichas = useSelector((state) => state.fichas);
  const [modalVisible, setModalVisibility] = useState(false);

  changeAgrupamento = (value) => {
    if (!value)
      setValues({ ...values, agrupamento: value, agrupamentos: Agrupamentos });
    else
      setValues({
        ...values,
        agrupamento: value,
        agrupamentos: Agrupamentos.filter((e) => e.id == value),
      });
  };

  showFichas = (ex) => {
    if (fichas.length > 0) {
      setModalVisibility(true);
      setValues({ ...values, exercicio: ex });
    }
  };

  addExercicio = (ficha) => {
    let newFicha = ficha;
    newFicha.pushExercicio(values.exercicio);
    dispatch(editFicha(fichas, newFicha));
    setModalVisibility(false);
  };

  return (
    <Fragment>
      <Picker
        selectedValue={values.agrupamento}
        onValueChange={(itemValue, itemIndex) => changeAgrupamento(itemValue)}
      >
        <Picker.Item key={0} label={"Todos"} value={0} />
        {Agrupamentos.map((e) => (
          <Picker.Item key={e.id} label={e.nome} value={e.id} />
        ))}
      </Picker>
      <ScrollView>
        {values.agrupamentos.map((agr, i) => (
          <Fragment key={agr.id}>
            <Text style={styles.header}>{agr.nome}</Text>
            {agr.exercicios.map((ex, i) => {
              return (
                <Card key={ex.id}>
                  <Card.Title>
                    <Text>{ex.nome}</Text>
                    <Pressable onPress={() => showFichas(ex)}>
                      <Ionicons
                        style={{ alignSelf: "flex-end" }}
                        name="ios-add"
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  </Card.Title>
                  <View key={ex.id} style={styles.exercicio}>
                    <Image
                      style={styles.imagem}
                      resizeMode="cover"
                      source={ex.imagem}
                    />
                    <Text style={styles.descricao}>{ex.descricao}</Text>
                  </View>
                </Card>
              );
            })}
          </Fragment>
        ))}
      </ScrollView>
      <BottomSheet isVisible={modalVisible}>
        {fichas.map((l, i) => (
          <Pressable key={l.id} onPress={() => addExercicio(l)}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </Pressable>
        ))}
        <Pressable onPress={() => setModalVisibility(false)}>
          <ListItem containerStyle={{ backgroundColor: "red" }}>
            <ListItem.Content>
              <ListItem.Title style={{ color: "white" }}>
                <Text>Cancelar</Text>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </Pressable>
      </BottomSheet>
    </Fragment>
  );
};
