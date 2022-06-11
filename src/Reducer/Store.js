import { createStore, combineReducers } from "redux";

import { reBasket } from "./Basket";
import { reSearch } from "./Search";
import { reLogin } from "./Authentication";
import { reLoading } from "./Loading";

const reducer = combineReducers({
  reBasket,
  reSearch,
  reLogin,
  reLoading,
});

export const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
