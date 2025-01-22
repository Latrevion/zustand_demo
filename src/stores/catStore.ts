import { createSelectors } from "./../utils/createSelectors";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
  cats: { smallCats: number; bigCats: number };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => number;
};

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        (set, get) => ({
          cats: {
            smallCats: 0,
            bigCats: 0,
          },
          increaseBigCats: () =>
            set((state) => {
              state.cats.bigCats++;
            }),
          increaseSmallCats: () =>
            set((state) => {
              state.cats.smallCats++;
            }),

          summary: () => {
            const total = get().cats.bigCats + get().cats.smallCats;
            return total;
          },
        }),
        { enabled: true, name: "catStore" }
      )
    )
  )
);
