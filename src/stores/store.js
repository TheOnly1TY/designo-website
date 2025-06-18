import { configureStore } from "@reduxjs/toolkit";
import designoSlice from "../DesignoSlice";

const store = configureStore({
  reducer: {
    designo: designoSlice,
  },
});

export default store;
