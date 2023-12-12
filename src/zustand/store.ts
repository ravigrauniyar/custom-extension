import { create } from "zustand";
import { CountType } from "../types/data";

export const countHello = create<CountType>()((set) => ({
  helloCount: 0,
  byeCount: 0,
  incrementHello: () => {
    set((state) => ({ helloCount: state.helloCount + 1 }));
  },
  incrementBye: () => {
    set((state) => ({ byeCount: state.byeCount + 1 }));
  },
}));
