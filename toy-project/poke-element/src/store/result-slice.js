import { createSlice, current } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "type",
  initialState: {
    types: [],
    changed: false,
  },
  reducers: {
    setType(state, action) {
      console.log(action.payload);
      const typeData = action.payload;

      state.changed = true;
      if (state.types.length === 0) {
        state.types = typeData;
      } else {
        const second = Object.values(typeData);
        const first = Object.values(state.types);

        for (let key in second[0]) {
          if (second[0][key] < first[0][key]) {
            second[0][key] = first[0][key];
          }
        }
        state.types = second[0];
      }
    },
  },
});

export const resultActions = resultSlice.actions;
export default resultSlice;
