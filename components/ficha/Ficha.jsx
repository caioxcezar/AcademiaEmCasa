import React, { Fragment, useEffect, useState } from "react";
import { Modal, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, Text, Input, ListItem } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./FichaStyle";
import FichaModel from "../../model/Ficha";
import { setFicha } from "../../AppAction";
import Agrupamentos from "../../data";

export default Ficha = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const fichas = useSelector((state) => state.fichas);
  const [values, setValues] = useState({
    nome: "",
    agrupamento: 0,
    exercicio: 0,
    exercicios: [],
    tpAcao: "",

    lstAgrupamento: [],
    lstExercicio: [],
  });

  const [valuesModal, setModal] = useState({
    visible: false,
    mesage: "",
  });

  useEffect(() => {
    setValues({
      ...values,
      tpAcao: route.params.tpAcao,
      lstAgrupamento: Agrupamentos.map((e) => (
        <Picker.Item key={e.id} label={e.nome} value={e.id} />
      )),
    });
  }, []);

  changeAgrupamento = (id) => {
    if (!id) return;
    let agrupamento = Agrupamentos.filter((e) => e.id == id);

    setValues({
      ...values,
      lstExercicio: listExercicios(agrupamento[0].exercicios),
      agrupamento: id,
    });
  };

  listExercicios = (list) => {
    return list.map((e) => (
      <Picker.Item key={e.id} label={e.nome} value={e.id} />
    ));
  };

  addLista = () => {
    const { agrupamento, exercicio, exercicios } = values;

    if (!exercicio || !agrupamento)
      setModal({
        ...values,
        visible: true,
        mesage: "Selecione um Agrupamento e Exercicio.",
      });
    else
      setValues({
        ...values,
        exercicios: [].concat(exercicios, {
          id: exercicios.length + 1,
          agrupamento,
          exercicio,
        }),
      });
  };

  const actions = {
    salvar: () => {
      let { nome, exercicios } = values;
      if (nome == "")
        setModal({
          ...values,
          visible: true,
          mesage: "Informe um nome",
        });
      else if (exercicios.length < 1)
        setModal({
          ...values,
          visible: true,
          mesage: "Informe um exercicio",
        });
      else {
        let fullEx = [];
        exercicios.forEach((e, i) => {
          let ag = Agrupamentos.filter((agr) => agr.id == e.agrupamento)[0];
          fullEx.push(ag.exercicios.filter((exe) => exe.id == e.exercicio)[0]);
        });
        dispatch(setFicha(new FichaModel(fichas.length + 1, nome, fullEx)));
        navigation.goBack();
      }
    },
  };

  apagarList = (item) => {
    setValues({
      ...values,
      exercicios: values.exercicios.filter((e) => e.id != item.id),
    });
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Nome: </Text>
        <Input
          keyboardType="numeric"
          onChangeText={(text) => setValues({ ...values, nome: text })}
          value={values.nome}
        />
        <Text>Agrupamento Muscular: </Text>
        <Picker
          selectedValue={values.agrupamento}
          onValueChange={(itemValue, itemIndex) => changeAgrupamento(itemValue)}
        >
          <Picker.Item key={0} label={"..."} value={0} />
          {values.lstAgrupamento}
        </Picker>
        <Text>Tipos de Exercicios: </Text>
        <Picker
          selectedValue={values.exercicio}
          onValueChange={(itemValue, itemIndex) =>
            setValues({ ...values, exercicio: itemValue })
          }
        >
          <Picker.Item key={0} label={"..."} value={0} />
          {values.lstExercicio}
        </Picker>
        <View style={styles.addBtn}>
          <Button title="Adicionar" onPress={() => addLista()} />
        </View>

        <View style={{ flex: 1 }}>
          <Text>Lista: </Text>
          <ScrollView>
            {values.exercicios.map((e, i) => {
              let ag = Agrupamentos.filter((agr) => agr.id == e.agrupamento)[0];
              let ex = ag.exercicios.filter((exe) => exe.id == e.exercicio)[0];
              const buttons = ["Apagar"];
              return (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{ex.id + " " + ex.nome}</ListItem.Title>
                    <ListItem.Subtitle>{ag.nome}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.ButtonGroup
                    onPress={() => apagarList(e)}
                    buttons={buttons}
                  />
                </ListItem>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.buttom}>
          <Button
            title={values.tpAcao}
            onPress={() => actions[values.tpAcao.toLocaleLowerCase()]()}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={valuesModal.visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{valuesModal.mesage}</Text>
            <Button
              title="OK"
              onPress={() => setModal({ ...valuesModal, visible: false })}
            />
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};
