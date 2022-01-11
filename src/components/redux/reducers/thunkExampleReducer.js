export const fetchThunk = () => async (dispatch) => {
  const response = await fetch("https...");
  const data = await response.json();
  dispatch({
    type: "SET_FETCH_DATA",
    payload: data,
  });
};
