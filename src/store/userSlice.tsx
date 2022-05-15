import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceState {
  token: string;
}

const initialState: UserSliceState = {
  token: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    logOut(state) {
      state.token = "";
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
