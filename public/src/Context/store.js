import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reMenu } from "./menu";

export const store = configureStore({
  reducer: combineReducers({
    menu: reMenu,
  }),
});
