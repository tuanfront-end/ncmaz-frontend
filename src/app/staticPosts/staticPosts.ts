import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface staticPostsState {
  staticPosts: (string | number)[];
}

const initialState: staticPostsState = {
  staticPosts: [],
};

export const staticPostsSlice = createSlice({
  name: "staticPosts",
  initialState,
  reducers: {
    addNewStaticPost: (state, action: PayloadAction<(string | number)[]>) => {
      state = {
        ...state,
        staticPosts: [...state.staticPosts, ...action.payload],
      };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewStaticPost } = staticPostsSlice.actions;

export const selectRecentstaticPosts = (state: RootState) =>
  state.staticPosts.staticPosts;

export default staticPostsSlice.reducer;
