import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./userSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    videos: videosSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const selectUser = (state: RootState) => state.user;
export const selectVideos = (state: RootState) => state.videos;

export default store;
