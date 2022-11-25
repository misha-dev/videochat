import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../types/userTypes";

import { RootState } from ".";

const initialState: UserType = {} as UserType;

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName(state: UserType, action: PayloadAction<Omit<UserType, "socketId">>) {
      state.name = action.payload.name;
    },
    logOut() {
      return {} as UserType;
    },
  },
});

export default user.reducer;
export const { setUserName, logOut } = user.actions;
export const selectUser = (state: RootState) => state.user;
