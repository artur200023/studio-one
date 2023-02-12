import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const recieveNews = createAsyncThunk("recieveNews", async () => {
  const url = "http://localhost:3030/news";

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const recieveNewsPending = (state, { payload }) => {
  state.newsList = [];
};

const recieveNewsFulfilled = (state, { payload }) => {
  state.newsList = payload;
};

const recieveNewsRejected = (state) => {
  state.newsList = [];
};

export const recieveNewsExtraReducer = (builder) => {
  builder
    .addCase(recieveNews.pending, recieveNewsPending)
    .addCase(recieveNews.fulfilled, recieveNewsFulfilled)
    .addCase(recieveNews.rejected, recieveNewsRejected);
};

export const createNewsAction = createAsyncThunk(
  "createNewsExtraReducer",
  async (news) => {
    const url = "http://localhost:3030/news";
    try {
      await axios.post(url, { ...news });
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const updateNewsAction = createAsyncThunk(
  "updateNewsAction",
  async (news) => {
    const url = `http://localhost:3030/news/${news.id}`;
    try {
      await axios.put(url, { ...news });
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const deleteNews = createAsyncThunk("deleteNews", async (news) => {
  const url = `http://localhost:3030/news/${news.id}`;
  try {
    await axios.delete(url);
  } catch (error) {
    throw new Error(error.message);
  }
});
