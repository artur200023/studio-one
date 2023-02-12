import { createSlice } from "@reduxjs/toolkit";
import { jwtToken, validateUserLogin } from "../../../helpers/userInformation";

const initialState = {
  userLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, { payload }) => {
      validateUserLogin(payload);
    },
    setUserInformation: (state, { payload }) => {
      state.userLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", jwtToken);
    },
    setUserLoggedIn: (state, { payload }) => {
      state.userLoggedIn = payload;
    },
  },
});

export const userLoggedInSelector = (state) => state.auth.userLoggedIn;

export const { userLogin, setUserInformation, setUserLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
