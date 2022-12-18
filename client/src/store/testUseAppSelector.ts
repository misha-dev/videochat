import { RootState } from ".";

const state: RootState = {
  user: { name: "misha", socketId: "ABC_123" },
};

export const testUseAppSelector = (f: (state: RootState) => unknown) => f(state);
