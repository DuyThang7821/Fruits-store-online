import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    email: "",
    tokens: null,
    message: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
      state.tokens = action.payload.tokens;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      state.tokens = null;
    },
  },
});

export const { login, logout  } = userSlice.actions;
export default userSlice.reducer;