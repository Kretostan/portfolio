import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_state, action) => {
      return {
        token: action.payload.token,
        role: action.payload.role,
      }
    },
    logout: () => {
      return {
        token: null,
        role: null,
      }
    }
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
