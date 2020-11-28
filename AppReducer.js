import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  fichas: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FICHAS":
      return { ...state, fichas: action.payload };
    case "SET_FICHA":
      let newFichas = [].concat(state.fichas, [action.payload]);
      console.log(newFichas);
      AsyncStorage.setItem("fichas", JSON.stringify(newFichas));
      return { ...state, fichas: newFichas };
    default:
      return state;
  }
};
