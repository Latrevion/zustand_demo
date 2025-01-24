import { createSelectors } from "./../utils/createSelectors";
import { create, StateCreator } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
  cats: { smallCats: number; bigCats: number };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => number;
};

const createCatSlice: StateCreator<
  TCatStoreState,
  [
    ["zustand/immer", never],
    ["zustand/devtools", unknown],
    ["zustand/subscribeWithSelector", never],
    ["zustand/persist", unknown]
  ]
> = (set, get) => ({
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
});

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        subscribeWithSelector(persist(createCatSlice, { name: "cat store" })),
        { enabled: true, name: "catStore" }
      )
    )
  )
);
