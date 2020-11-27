import Ficha from "./model/Ficha";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFichas = () => {
  return {
    type: "GET_FICHAS",
    payload: loadFichas(),
  };
};

export const setFicha = (ficha) => {
  return {
    type: "SET_FICHA",
    payload: ficha,
  };
};

const loadFichas = () => {
  return [
    new Ficha(1, "Segunda", [1, 2, 3]),
    new Ficha(2, "Terça", [1, 2, 3, 4, 5]),
    new Ficha(3, "Quarta", []),
    new Ficha(4, "Quinta", [1]),
  ];
};
