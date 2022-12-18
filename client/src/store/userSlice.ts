import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../types/userTypes";

import { RootState } from ".";

const initialState: UserType = {} as UserType;

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setSocketId(state, action: PayloadAction<string>) {
      state.socketId = action.payload;
    },
    logOut() {
      return {} as UserType;
    },
  },
});

export default user.reducer;
export const { setUserName, setSocketId, logOut } = user.actions;
export const selectUser = (state: RootState) => state.user;
