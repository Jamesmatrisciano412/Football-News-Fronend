import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "logoInfo",
  initialState: {
    isLogged: false,
    email: "",
    fullname: "",
    auth_token: ""
  },
  reducers: {
    loginSite: (state, data) => {
      state.isLogged = data.payload.isLogged;
      state.email = data.payload.email;
      state.fullname = data.payload.fullname;
    },
    logoutSite: (state) => {
      state.isLogged = false;
      state.email = "";
      state.fullname = "";
    },
    setAuthToken: (state, token) => {
        state.auth_token = token.payload;
    }
  },
});

export const { loginSite, logoutSite, setAuthToken } = userSlice.actions;
export default userSlice.reducer;
