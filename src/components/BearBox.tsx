import React, { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore";
import { useFoodStore } from "../stores/fishStore";
import { shallow } from "zustand/shallow";

export const BearBox = () => {
  //   const bears = useBearStore((state) => state.bears);
  //   const increasePopulation = useBearStore((state) => state.increasePopulation);
  //   const removeAllBears = useBearStore((state) => state.removeAllBears);
  const { bears, increasePopulation, decreasePopulation, removeAllBears } =
    useBearStore();
  // const fish = useFoodStore((state) => state.fish);

  const [bgColor, setBgColor] = useState<"lightgreen" | "lightpink">(
    "lightpink"
  );

  useEffect(() => {
    // const unsub = useFoodStore.subscribe((state, preState) => {
    //   console.log(state, preState);
    //   if(state.fish<=5){
    //     setBgColor('lightpink')
    //   }else if(state.fish>5){
    //     setBgColor('lightgreen')
    //   }
    //   return unsub;
    // });

    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, preFish) => {
        if (fish <= 5) {
          setBgColor("lightpink");
        } else if (fish > 5) {
          setBgColor("lightgreen");
        }
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    );
    return unsub;
  }, []);

  return (
    <div
      className="box"
      // style={{ backgroundColor: fish > 5 ? "lightgreen" : "lightpink" }}
      style={{ backgroundColor: bgColor }}
    >
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={decreasePopulation}>del bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
        <button onClick={useBearStore.persist.clearStorage}>
          clear storage
        </button>
      </div>
    </div>
  );
};
