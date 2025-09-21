import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showMenu: false,
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setShowMenu: (_state, action) => {
			return {
				showMenu: action.payload
			};
		},
	},
});

export const { setShowMenu } = menuSlice.actions;
export default menuSlice.reducer;
