import React, { useEffect } from "react";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetFichas, deleteFicha } from "../../AppAction";

export default Fichas = (props) => {
  const fichas = useSelector((state) => state.fichas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetFichas());
  }, []);

  actionIndex = (selectedIndex, value) => {
    if (selectedIndex == 0)
      props.navigate("Ficha", { tpAcao: "Editar", ficha: value });
    if (selectedIndex == 1) dispatch(deleteFicha(fichas, value));
  };

  selectIndex = (selectedIndex) => {
    console.log(selectedIndex);
    //this.setState({selectedIndex})
  };

  return (
    <ScrollView>
      {fichas.map((l, i) => {
        const buttons = ["Editar", "Apagar"];
        return (
          <ListItem key={i} bottomDivider>
            <ListItem.Content onPress={selectIndex}>
              <ListItem.Title>{l.id + " " + l.nome}</ListItem.Title>
              <ListItem.Subtitle>
                {"Quantidade de Exercicios: " + l.exercicios.length}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.ButtonGroup
              onPress={(index) => actionIndex(index, l)}
              buttons={buttons}
            />
          </ListItem>
        );
      })}
    </ScrollView>
  );
};
