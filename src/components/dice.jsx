import React, { useState, useEffect, useRef } from "react";
import dice1 from "../assets/dice-six-faces-one.png";
import dice2 from "../assets/dice-six-faces-two.png";
import dice3 from "../assets/dice-six-faces-three.png";
import dice4 from "../assets/dice-six-faces-four.png";
import dice5 from "../assets/dice-six-faces-five.png";
import dice6 from "../assets/dice-six-faces-six.png";

import { useAppContext } from "../context/context";

const diceArr = [
  { point: 1, src: dice1 },
  { point: 2, src: dice2 },
  { point: 3, src: dice3 },
  { point: 4, src: dice4 },
  { point: 5, src: dice5 },
  { point: 6, src: dice6 },
];

function Dice({ canClick }) {
  const coverRef = useRef([]);
  const [point, setPoint] = useState(0);
  const [final, setFinal] = useState(initDice());
  const { setPlayer1, setPlayer2, player1, player2 } = useAppContext();

  // memo
  function callback(x) {
    const getRadomWithCache = () => {
      const size = diceArr.length - 1;
      let i = Math.floor(Math.random() * size);
      return i;
    };
    return diceArr[getRadomWithCache()];
  }
  function initDice() {
    return Array.from({ length: 8 }, callback);
  }

  const handlePick = (pt, idx) => {
    setPoint(pt);
    coverRef.current[idx].style.display = "none";
    if (player1.point !== 0) return setPlayer2(pt, true);
    return setPlayer1(pt, true);
  };

  useEffect(() => {
    if (player1.name !== "" && player2.name !== "") return;
    setFinal(initDice());
    coverRef.current.forEach((ele) => {
      ele.style.display = "block";
    });
  }, [player1, player2]);

  return (
    <div
      style={{ pointerEvents: canClick ? "auto" : "none" }}
      className="w-full mt-3 px-10 justify-center flex gap-5 cursor-pointer h-[80px]"
    >
      {final.map((ele, idx) => {
        const { src, point } = ele;
        return (
          <div className="relative cursor-pointer">
            <img src={src} className="w-[100px] h-[100px]" />
            <div
              ref={(ref) => (coverRef.current[idx] = ref)}
              onClick={() => handlePick(point, idx)}
              className="cover flex text-4xl items-center justify-center text-green-700 cursor-pointer absolute top-2 left-2 w-[80px] h-[80px] bg-white"
            >
              <div>{idx}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dice;
