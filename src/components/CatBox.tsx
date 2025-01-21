import React from "react";
import { useCatStore } from "../stores/catStore";

const CatBox = () => {
  const { cats, increaseBigCats, increaseSmallCats, summary } = useCatStore();
  console.log(summary());
  return (
    <div className="box">
      <h1>Cat box</h1>
      <p>big cats: {cats.bigCats}</p>
      <p>small cats: {cats.smallCats}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};

export default CatBox;
