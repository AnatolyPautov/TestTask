import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface UserSliceState {
  isAuth: boolean;
}

const initialState: UserSliceState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
