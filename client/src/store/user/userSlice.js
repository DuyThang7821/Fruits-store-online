import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../axios";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    email: "",
    tokens: {
      accessToken: "",
      refreshToken: "",
    },
    message: "",
  },
  reducers: {
    login: (state, action) => {
      setAuthToken(action.payload.tokens.accessToken);
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.tokens = action.payload.tokens;
    },
    logout: (state) => {
      setAuthToken(null); 
      state.isLoggedIn = false;
      state.email = "";
      state.tokens.accessToken = "";
      state.tokens.refreshToken = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;