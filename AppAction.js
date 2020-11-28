import AsyncStorage from "@react-native-async-storage/async-storage";

export const setFicha = (ficha) => {
  return {
    type: "SET_FICHA",
    payload: ficha,
  };
};

const getFichas = (fichas) => {
  return {
    type: "GET_FICHAS",
    payload: fichas,
  };
};

export const asyncGetFichas = () => {
  return async () =>
    await AsyncStorage.getItem("fichas")
      .then((res) => (!res ? [] : JSON.parse(res)))
      .then((arr) => getFichas(arr.map((e) => e._id, e._nome, e._exercicios)))
      .catch((e) => {});
};
