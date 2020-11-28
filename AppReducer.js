const initialState = {
  fichas: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_FICHA":
    case "EDIT_FICHA":
    case "GET_FICHAS":
    case "SET_FICHA":
      return { ...state, fichas: action.payload };
    default:
      return state;
  }
};
