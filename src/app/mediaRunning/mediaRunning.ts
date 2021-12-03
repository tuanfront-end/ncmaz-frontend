import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { PostNode } from "data/postCardType";

export interface MediaRunningState {
  postData?: PostNode;
  state?: "loading" | "playing" | "paused" | "ended" | null;
  listPostAudio?: PostNode[];
}

const initialState: MediaRunningState = {};

export const mediaRunningSlice = createSlice({
  name: "mediaRunning",
  initialState,
  reducers: {
    changeCurrentMediaRunning: (
      state,
      action: PayloadAction<MediaRunningState>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    changeStateMediaRunning: (
      state,
      action: PayloadAction<MediaRunningState["state"]>
    ) => {
      return {
        ...state,
        state: action.payload,
      };
    },
    removeMediaRunning: (state) => {
      return {
        listPostAudio: state.listPostAudio,
      };
    },
    //
    addNewListPostAudio: (state, action: PayloadAction<PostNode>) => {
      return {
        ...state,
        listPostAudio: [...(state.listPostAudio || []), action.payload],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeCurrentMediaRunning,
  changeStateMediaRunning,
  removeMediaRunning,
  addNewListPostAudio,
} = mediaRunningSlice.actions;

export const selectCurrentMediaRunning = (state: RootState) =>
  state.mediaRunning;

export default mediaRunningSlice.reducer;
