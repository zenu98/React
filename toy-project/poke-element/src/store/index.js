import { configureStore } from "@reduxjs/toolkit";
import elementSlice from "./element-slice";
import resultSlice from "./result-slice";

const store = configureStore({
  reducer: { element: elementSlice.reducer, result: resultSlice.reducer },
});

export default store;
