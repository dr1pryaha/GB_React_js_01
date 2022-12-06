import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "../store/profile/reducer";

export const store = configureStore({
  reducer: profileReducer,
});
