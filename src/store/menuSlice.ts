import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showMenu: false,
	currentPage: '/',
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setShowMenu: (state, action) => {
			return {
				...state,
				showMenu: action.payload
			};
		},
		setCurrentPage: (state, action) => {
			return {
				...state,
				currentPage: action.payload,
			};
		},
	},
});

export const { setShowMenu, setCurrentPage } = menuSlice.actions;
export default menuSlice.reducer;