import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import auth from "./slices/auth";
import news from "./slices/news";

const mainReducer = combineReducers({
  auth,
  news,
});

const store = configureStore({
  reducer: mainReducer,
});

setupListeners(store.dispatch);

export default store;
