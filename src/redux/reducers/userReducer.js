import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "logoInfo",
  initialState: {
    isLogged: false,
    email: "",
    fullname: "",
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
  },
});

export const { loginSite, logoutSite } = userSlice.actions;
export default userSlice.reducer;
