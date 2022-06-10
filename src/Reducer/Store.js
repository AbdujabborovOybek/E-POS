import { createStore, combineReducers } from "redux";

import { reBasket } from "./Basket";

const reducer = combineReducers({
  reBasket,
});

export const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
