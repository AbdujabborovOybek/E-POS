import { createStore, combineReducers } from "redux";

import { reSeach } from "./Reducer/reSeach";
import { reBasket } from "./Reducer/reBasket";
import { reLoading } from "./Reducer/reLoading";
import { reLogin } from "./Reducer/reLogin";

const reducer = combineReducers({
  reSeach,
  reBasket,
  reLoading,
  reLogin,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
