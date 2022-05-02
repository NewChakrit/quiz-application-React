import React, { useContext } from "react";
import { DataContext } from "../App";
import QData from "../data/QData";

function Score() {
  const { score, setAppState, setScore } = useContext(DataContext);

  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  };
  return (
    <div className="score">
      <h1>Total Score</h1>
      <h2>
        {score} / {QData.length}
      </h2>
      <button onClick={() => restartApp()}>Quiz Again</button>
    </div>
  );
}

export default Score;
