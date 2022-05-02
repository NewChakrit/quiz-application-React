import React, { useContext } from "react";
import { DataContext } from "../App";

function Menu() {
  const { setAppState } = useContext(DataContext);

  return (
    <div className="menu">
      <h1>The Pre-test</h1>
      <button onClick={() => setAppState("quiz")}>Start</button>
    </div>
  );
}

export default Menu;
