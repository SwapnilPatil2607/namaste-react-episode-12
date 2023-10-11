import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slices.js";

const configurationStore = configureStore({
  reducer: {
    countReducerInsideStore: sliceReducer,
  },
});

export default configurationStore;
