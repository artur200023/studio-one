import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import news from "./slices/news";

const mainReducer = combineReducers({
  auth,
  news,
});

const store = configureStore({
  reducer: mainReducer,
});


export default store;
