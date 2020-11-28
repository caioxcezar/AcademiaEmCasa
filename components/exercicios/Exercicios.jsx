import React, { Fragment, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import styles from "./ExerciciosStyle";
import Agrupamentos from "../../data";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

export default Exercicios = () => {
  const [values, setValues] = useState({
    agrupamentos: Agrupamentos,
    agrupamento: 0,
  });

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
                    <Pressable
                      onPress={() => {
                        console.log({ agrupamento: agr.id, exercicio: ex.id });
                      }}
                    >
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
    </Fragment>
  );
};
