export const addTask = (text, checked) => ({
  type: "ADD_TASK",
  payload: {
    text,
    checked,
  },
});
