import React, { useRef, useState } from "react";
import { useAppContext } from "../context/context";
import { randomFromArr, removeFromArr } from "../function/function";
let playerArr = ["Nick", "Jonas", "Zac", "Larz", "Trang"];

function Player({ player, num }) {
  const [name, setName] = useState("");
  const diceRef = useRef();

  const { setPlayer1, setPlayer2, player1 } = useAppContext();

  const handleClick = () => {
    diceRef.current.style.pointerEvent = "none";
    const interval = setInterval(() => {
      const player = randomFromArr(playerArr);
      setName(player);
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
      const player = randomFromArr(playerArr);
      setName(player);
      playerArr = removeFromArr(playerArr, player);
      diceRef.current.style.pointerEvent = "all";
      if (player1.name !== "") return setPlayer2(player);
      return setPlayer1(player);
    }, 3000);
  };
  return (
    <div
      ref={diceRef}
      onClick={handleClick}
      className="w-50 cursor-pointer text-2xl inline-flex  flex-col gap-5 "
    >
      <div>Player {num}</div>

      <h3>{name}</h3>
      <div className="">{player.point}</div>
    </div>
  );
}

export default Player;
