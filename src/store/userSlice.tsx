import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceState {
  token: string | null;
}

const initialState: UserSliceState = {
  token: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    logOut(state) {
      state.token = null;
    },
  },
});

export const { logOut, setToken } = userSlice.actions;

export default userSlice.reducer;
