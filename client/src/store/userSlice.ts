import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../types/userTypes";

import { RootState } from ".";

const initialState: UserType = {} as UserType;

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSocketId(state: UserType, action: PayloadAction<Omit<UserType, "name">>) {
      state.socketId = action.payload.socketId;
    },
    setUserName(state: UserType, action: PayloadAction<Omit<UserType, "socketId">>) {
      state.name = action.payload.name;
    },
    logOut() {
      return {} as UserType;
    },
  },
});

export default user.reducer;
export const { setUserSocketId, setUserName, logOut } = user.actions;
export const selectUser = (state: RootState) => state.user;
