const initialState = {
  filterBy: "all",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};
