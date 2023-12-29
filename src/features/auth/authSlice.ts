import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload?.user;
      state.isLoading = false;
    },

    userNotLoggedIn: (state, action) => {
      state.user = null;
      state.isLoading = false;
    },

    userLoggedOut: (state) => {
      state.user = null;
    },
  },
});

export const { userLoggedIn, userNotLoggedIn, userLoggedOut } =
  authSlice.actions;
export default authSlice.reducer;
