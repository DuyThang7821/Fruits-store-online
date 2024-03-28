import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    email: "",
    token: null,
    mes: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const { login  } = userSlice.actions;
export default userSlice.reducer;