import React, { useState, useEffect } from "react";
import dice1 from "../assets/dice-six-faces-one.png";
import dice2 from "../assets/dice-six-faces-two.png";
import dice3 from "../assets/dice-six-faces-three.png";
import dice4 from "../assets/dice-six-faces-four.png";
import dice5 from "../assets/dice-six-faces-five.png";
import dice6 from "../assets/dice-six-faces-six.png";
import { randomFromArr } from "../function/function";
import { useAppContext } from "../context/context";

const diceArr = [
  { point: 1, src: dice1 },
  { point: 2, src: dice2 },
  { point: 3, src: dice3 },
  { point: 4, src: dice4 },
  { point: 5, src: dice5 },
  { point: 6, src: dice6 },
];

function Dice() {
  const [dice, setDice] = useState(diceArr[0]);
  const [finish, setFinish] = useState(false);
  const { setPlayer1, setPlayer2, player1 } = useAppContext();
  console.log(useAppContext);
  const handleClick = () => {
    setFinish(false);
    const tick = setInterval(() => {
      setDice(randomFromArr(diceArr));
    }, 500);
    setTimeout(() => {
      clearInterval(tick);
      setFinish(true);
    }, 3000);
  };
  useEffect(() => {
    if (!finish) return;
    if (player1.point !== 0) return setPlayer2(dice.point, true);
    return setPlayer1(dice.point, true);
  }, [finish]);

  return (
    <div onClick={handleClick} className="w-[100px] cursor-pointer h-[100px]">
      <img className="w-full h-full" src={dice.src} alt="" />
    </div>
  );
}

export default Dice;
