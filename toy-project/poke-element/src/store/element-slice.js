import { createSlice, current } from "@reduxjs/toolkit";

const elementSlice = createSlice({
  name: "element",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    select(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      console.log(current(state.items));
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      state.changed = true;
      if (!existingItem) {
        console.log("없다");
        if (state.items.length < 2)
          state.items.push({
            name: newItem.name,
          });
      } else {
        console.log("있다");
        state.items = state.items.filter((item) => item.name !== newItem.name);
        console.log(state.items);
      }
    },
  },
});

export const elementActions = elementSlice.actions;
export default elementSlice;
