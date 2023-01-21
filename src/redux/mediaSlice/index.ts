import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedMediaState {
  isLoading: boolean;
  selectedMedia: string;
}

const initialState: SelectedMediaState = {
  isLoading: false,
  selectedMedia: "",
};

export const selectedMediaSlice = createSlice({
  name: "selectedMedia",
  initialState,
  reducers: {
    setSelectedMedia: (state, action: PayloadAction<SelectedMediaState>) => {
      return {
        ...state,
        selectedMedia: action.payload.selectedMedia,
        isLoading: action.payload.isLoading,
      };
    },
  },
});

export const { setSelectedMedia } = selectedMediaSlice.actions;

export default selectedMediaSlice.reducer;
