import { createStore, combineReducers } from "redux";

import { reSeach } from "./Reducer/reSeach";
import { reBasket } from "./Reducer/reBasket";

const reducer = combineReducers({
  reSeach,
  reBasket,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
