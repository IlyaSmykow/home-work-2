export const reducer = (state, action) => {

    const lastTask = state[state.length - 1];
    const lastId = lastTask ? lastTask.id + 1 : 1;

    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    id: lastId,
                    ...action.payload
                }
            ];
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};