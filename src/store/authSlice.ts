import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_state, action) => {
      return {
        isLoggedIn: action.payload.isLoggedIn,
        role: action.payload.role,
      };
    },
    logout: () => {
      return {
        isLoggedIn: false,
        role: null,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
