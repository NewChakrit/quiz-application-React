import React, { useEffect, useState, useContext } from "react";
import QData from "../data/QData";
import { DataContext } from "../App";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selectChoices, setSelectChoices] = useState("");

  const { score, setScore, setAppState } = useContext(DataContext);

  // console.log(score);

  useEffect(() => {
    checkAnswer();
    // eslint-disable-next-line
  }, [selectChoices]);

  const nextQuestion = () => {
    setSelectChoices("");
    if (current === QData.length - 1) {
      setAppState("score");
    } else {
      setCurrent(current + 1);
    }
  };

  const checkAnswer = () => {
    if (selectChoices !== "") {
      if (selectChoices === QData[current].answer) {
        setScore(score + 1);
        nextQuestion();
      } else {
        nextQuestion();
      }
    }
  };
  return (
    <div className="quiz">
      <h1>{QData[current].question}</h1>
      <div className="choices">
        <button onClick={() => setSelectChoices("A")}>
          {QData[current].A}
        </button>
        <button onClick={() => setSelectChoices("B")}>
          {QData[current].B}
        </button>
        <button onClick={() => setSelectChoices("C")}>
          {QData[current].C}
        </button>
        <button onClick={() => setSelectChoices("D")}>
          {QData[current].D}
        </button>
      </div>
      <br />
      <h4>
        {current + 1} / {QData.length}
      </h4>
    </div>
  );
}

export default Quiz;
