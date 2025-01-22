import React from "react";
import { useFoodStore } from "../stores/fishStore";
export const FoodBox = () => {
  const { fish, addOneFish, removeAllFIsh, removeOneFish } = useFoodStore();
  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish:{fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFIsh}>remove all fish</button>
      </div>
    </div>
  );
};
