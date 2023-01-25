import { createSlice, current } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "type",
  initialState: {
    types: [],
    changed: false,
  },
  reducers: {
    setType(state, action) {
      const typeData = action.payload;
      state.changed = true;
    },
  },
});

export const resultActions = resultSlice.actions;
export default resultSlice;
