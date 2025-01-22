import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// type TBearStoreState = {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
// };

export const useBearStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      color: "red",
      size: "12",
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
    {
      name: "bear store",
      // partialize: (state) => ({
      //   bears: state.bears,
      // }),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["size", "color"].includes(key)
          )
        ),
    }
  )
);

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
  color: string;
  size: string;
};
