import { configureStore } from "@reduxjs/toolkit";
import elementSlice from "./element-slice";

const store = configureStore({
  reducer: { element: elementSlice.reducer },
});

export default store;
