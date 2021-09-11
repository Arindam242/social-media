import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  InitialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export default UserSlice.reducer;
export const { login } = UserSlice.actions;
