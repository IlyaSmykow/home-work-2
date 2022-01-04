export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    id: action.id,
                    ...action.payload
                }
            ];
        default:
            return state;
    }
};