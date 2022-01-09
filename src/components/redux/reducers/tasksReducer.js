const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  const lastTask = state[state.length - 1];
  const lastId = lastTask ? lastTask.id + 1 : 1;

  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: lastId,
          ...action.payload,
        },
      ];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_COMPLETE":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              checked: !task.checked,
            }
          : task
      );
    case "COMPLETE_ALL":
      return state.map((task) => {
        return {
          ...task,
          checked: true,
        };
      });
    case "RESET_ALL":
      return state.map((task) => {
        return {
          ...task,
          checked: false,
        };
      });
    case "REMOVE_ALL":
      return (state = []);
    default:
      return state;
  }
};
