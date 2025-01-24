import React from "react";
import {
  useFoodStore,
  addOneFish,
  removeAllFish,
  removeOneFish,
} from "../stores/fishStore";
export const FoodBox = () => {
  // const { fish, addOneFish, removeAllFIsh, removeOneFish } = useFoodStore();
  const fish = useFoodStore((state) => state.fish);
  const add5fish = () => {
    useFoodStore.setState((state) => ({
      fish: state.fish + 5,
    }));
  };
  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish:{fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>
        <button onClick={add5fish}>add 5 fish</button>
      </div>
    </div>
  );
};
