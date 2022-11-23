import { RootState } from ".";

const state: RootState = {
  user: { name: "misha", socketId: "test" },
};

export const testUseAppSelector = (f: (state: RootState) => unknown) => f(state);
