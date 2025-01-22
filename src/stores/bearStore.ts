import { create } from "zustand";
import { devtools } from "zustand/middleware";

// type TBearStoreState = {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
// };

export const useBearStore = create<TBearStoreState>()(
  devtools(
    (set) => ({
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
    }),
    { enabled: true, name: "bear-store" }
  )
);

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
};
