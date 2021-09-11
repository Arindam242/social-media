import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    title: "",
    image: "",
    name: "",
    avatar: "",
    likes: "",
    comments: "",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.title = action.payload.title;
      state.avatar = action.payload.avatar;
      state.likes = action.payload.likes;
      state.comments = action.payload.comments;
    },
  },
});

export default PostSlice.reducer;
export const { update } = PostSlice.actions;
