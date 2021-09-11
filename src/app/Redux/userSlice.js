import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  name: "",
  email: "",
  avatar: "",
};

export const UserSlice = createSlice({
  name: "user",
  InitialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
  },
});

export default UserSlice.reducer;
export const { login } = userSlice.actions;
