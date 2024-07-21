import { useState } from "react";
import RollingDice from "./components/RollingDice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RollingDice />
    </>
  );
}

export default App;
