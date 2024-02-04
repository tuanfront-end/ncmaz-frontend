import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface PageItemType {
  type: string;
  data: Object;
}

interface PagesState {
  currentPage: PageItemType;
}

const initialState: PagesState = {
  currentPage: {
    type: "/",
    data: {},
  },
};

export const currentPageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<PageItemType>) => {
      state = {
        ...state,
        currentPage: action.payload,
      };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrentPage } = currentPageSlice.actions;

// export const selectCurrentPageData = (state: RootState) =>
//   state.pages.currentPage;

export default currentPageSlice.reducer;
