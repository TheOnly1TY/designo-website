import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const designoSlice = createSlice({
  name: "Designo",
  initialState,
  reducers: {
    isNavOpen() {},
  },
});

export const { isNavOpen } = designoSlice.actions;

export default designoSlice.reducer;
