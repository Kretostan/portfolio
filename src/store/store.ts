import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../store/menuSlice";
import authReducer from "../store/authSlice";
import modalReducer from "../store/modalSlice.ts";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
