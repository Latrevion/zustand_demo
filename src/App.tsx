import { BearBox } from "./components/BearBox";
import CatBox from "./components/CatBox";
import CatBox2 from "./components/CatBox2";
import CatController from "./components/CatController";
import { FoodBox } from "./components/foodBox";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox></FoodBox>
        {/* <CatBox></CatBox>
        <CatBox2></CatBox2>
        <CatController></CatController> */}
      </div>
    </div>
  );
}

export default App;
