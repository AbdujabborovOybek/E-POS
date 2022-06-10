import { createStore, combineReducers } from "redux";

import { reBasket } from "./Basket";
import { reSearch } from "./Search";

const reducer = combineReducers({
  reBasket,
  reSearch,
});

export const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
