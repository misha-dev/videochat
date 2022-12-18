import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../types/userTypes";

import { RootState } from ".";

const initialState: UserType = {} as UserType;

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.name = action.payload.name;
      state.socketId = action.payload.socketId;
    },

    logOut() {
      return {} as UserType;
    },
  },
});

export default user.reducer;
export const { setUser, logOut } = user.actions;
export const selectUser = (state: RootState) => state.user;
