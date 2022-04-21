import { createStore, combineReducers } from "redux";

import { reSeach } from "./Reducer/reSeach";
import { reBasket, totalPrice } from "./Reducer/reBasket";

const reducer = combineReducers({
  reSeach,
  reBasket,
  totalPrice,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
