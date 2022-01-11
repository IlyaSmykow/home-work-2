import { createStore, combineReducers, applyMiddleware } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { tasksReducer } from "./reducers/tasksReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

window.__store__ = store;

export default store;
