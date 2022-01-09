import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { tasksReducer } from "./reducers/tasksReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
