import { RootState } from ".";

const state: RootState = {
  user: { name: "misha" },
};

export const testUseAppSelector = (f: (state: RootState) => unknown) => f(state);
