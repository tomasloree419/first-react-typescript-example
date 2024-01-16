import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IPost } from "../models/postinterface";

const initialState: IPost[] = [
  {
    id: nanoid(),
    title: "About Typescript",
    content: "Typescript is extended javascript with type",
    avatar: "./avatar/avatar3.png",
    user: "Dolly",
  },
  {
    id: nanoid(),
    title: "React is still in king state of web",
    content:
      "React is open-source javascript framework for single page applications",
    avatar: "./avatar/avatar3.png",
    user: "Tom",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    onAddPost(state, action: PayloadAction<IPost>) {
      state.push(action.payload);
    },
  },
});

export const { onAddPost } = postsSlice.actions;

export default postsSlice.reducer;
