import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Questions = {
  id: number;
  title: string;
  answer: string;
};
type Videos = {
  id: string;
  title: string;
  link: string;
  questions: Questions[];
};
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
