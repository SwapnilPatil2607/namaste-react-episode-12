import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state) => {
      console.log(state.count);
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { increaseCount, decreaseCount } = slice.actions;
export default slice.reducer;
