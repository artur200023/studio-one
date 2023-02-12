import { createSlice } from "@reduxjs/toolkit";
import {
  recieveNewsExtraReducer,
  createNewsAction,
  updateNewsAction,
  deleteNews,
} from "../../thunks/newsThunk";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    recieveNewsExtraReducer(builder);
    createNewsAction(builder);
    updateNewsAction(builder);
    deleteNews(builder);
  },
});

export const newsSelector = (state) => state.news.newsList;


export default newsSlice.reducer;
