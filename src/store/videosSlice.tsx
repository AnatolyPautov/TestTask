import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Videos } from "../types/types";

interface VideosSliceState {
  videos: Videos[];
}

const initialState: VideosSliceState = {
  videos: [],
};

const videosSlice = createSlice({
  name: "Videos",
  initialState,
  reducers: {
    setVideos(state, { payload }: PayloadAction<Videos[]>) {
      state.videos = payload;
    },
  },
});

export const { setVideos } = videosSlice.actions;

export default videosSlice.reducer;
