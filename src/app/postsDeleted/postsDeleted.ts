import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface postsDeletedState {
  recentDeleted: (string | number)[];
}

const initialState: postsDeletedState = {
  recentDeleted: [],
};

export const postsDeletedSlice = createSlice({
  name: "postsDeleted",
  initialState,
  reducers: {
    addNewDeletedByPostId: (state, action: PayloadAction<string | number>) => {
      state = {
        ...state,
        recentDeleted: [...state.recentDeleted, action.payload],
      };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewDeletedByPostId } = postsDeletedSlice.actions;

export const selectRecentPostsDeleted = (state: RootState) =>
  state.postsDeleted.recentDeleted;

export default postsDeletedSlice.reducer;
