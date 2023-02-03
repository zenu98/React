import { createSlice, current } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "type",
  initialState: {
    types: [],
    typesArr: [],

    changed: false,
  },
  reducers: {
    setType(state, action) {
      console.log(action.payload);
      const typeData = action.payload;

      state.changed = true;

      state.types = Object.values(typeData);
      console.log(state.types);
      state.typesArr = Object.entries(state.types[0]);
      console.log(state.typesArr);
    },
    setTypeTwo(state, action) {
      console.log(action.payload);
      const typeData = action.payload;

      state.changed = true;
      const second = Object.values(typeData);
      const first = state.types;

      for (let key in second[0]) {
        if (second[0][key] < first[0][key]) {
          second[0][key] = first[0][key];
        }
      }
      state.typesArr = Object.entries(second[0]);
      console.log(state.typesArr);
      state.typesArr.map((item) => console.log(item));
    },
  },
});

export const resultActions = resultSlice.actions;
export default resultSlice;