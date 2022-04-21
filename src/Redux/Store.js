import { createStore, combineReducers } from "redux";

import { reSeach } from "./Reducer/reSeach";

const reducer = combineReducers({
  reSeach,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
