import { configureStore } from '@reduxjs/toolkit';
import axios from "axios";

import menuReducer from '../store/menuSlice';
import authReducer from '../store/authSlice';

const fetchUserInfo = async () => {
	try {
		const response = await axios.get(import.meta.env.VITE_API_URL + "/user", {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error("Failed to fetch user info:", error);
		return { token: null, role: null };
	}
};

const loadInitialAuthState = async () => {
	const userInfo = await fetchUserInfo();
	return {
		token: userInfo.token,
		role: userInfo.role,
	};
};

const initialState = await loadInitialAuthState();

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		auth: authReducer,
	},
	preloadedState: {
		auth: initialState,
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
