import { create } from "zustand";

// type TBearStoreState = {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
// };

export const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  decreasePopulation: () => {
    set((state) => ({
      bears: state.bears - 1,
    }));
  },
  removeAllBears: () => set({ bears: 0 }),
  getOwner: async () => {
    const result = await fetch("https://api.github.com/users/1");
    const owner = await result.json();
    console.log(owner.name);
    return owner.name;
  },
}));

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
};
