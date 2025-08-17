import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
