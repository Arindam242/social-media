import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Redux/userSlice";

export const store = configureStore({
  reducer: {
    user:UserReducer
  },
});
