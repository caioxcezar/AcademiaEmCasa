import React, { useEffect } from "react";
import { getFichas } from "../../AppAction";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text } from "react-native";

export default Fichas = () => {
  const fichas = useSelector((state) => state.fichas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFichas());
  }, []);

  return (
    <ScrollView>
      {fichas.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.id + " " + l.nome}</ListItem.Title>
            <ListItem.Subtitle>
              {"Quantidade de Exercicios: " + l.exercicios.length}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};
