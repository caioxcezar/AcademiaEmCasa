const initialState = { fichas: [] };

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FICHAS":
      return { ...state, fichas: action.payload };
    case "SET_FICHAS":
      return { ...state, fichas: state.fichas.push(action.payload) };
    default:
      return state;
  }
};
