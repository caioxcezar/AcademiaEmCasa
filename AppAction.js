import AsyncStorage from "@react-native-async-storage/async-storage";

export const setFicha = (fichas, ficha) => {
  let newFichas = [].concat(fichas, [ficha]);
  AsyncStorage.setItem("fichas", JSON.stringify(newFichas));
  return {
    type: "SET_FICHA",
    payload: newFichas,
  };
};

export const editFicha = (fichas, ficha) => {
  let newFichas = fichas.map((e) => (e.id == ficha.id ? ficha : e));
  AsyncStorage.setItem("fichas", JSON.stringify(newFichas));
  return {
    type: "EDIT_FICHA",
    payload: newFichas,
  };
};

export const deleteFicha = (fichas, ficha) => {
  let newFichas = fichas.filter((e) => e.id != ficha.id);
  AsyncStorage.setItem("fichas", JSON.stringify(newFichas));
  return {
    type: "DELETE_FICHA",
    payload: newFichas,
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
