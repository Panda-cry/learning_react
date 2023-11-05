import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true,
};

const toggleSlice = createSlice({
  name: "uiToggle",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;
