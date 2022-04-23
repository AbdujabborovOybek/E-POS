import { createStore, combineReducers } from "redux";

import { reSeach } from "./Reducer/reSeach";
import { reBasket } from "./Reducer/reBasket";
import { reLoading } from "./Reducer/reLoading";

const reducer = combineReducers({
  reSeach,
  reBasket,
  reLoading,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
