import React, { useRef, useState } from "react";
import { useAppContext } from "../context/context";
import { randomFromArr, removeFromArr } from "../function/function";

function Player({ player, num, handlePick }) {
  return (
    <div
      onClick={handlePick}
      className="w-50 cursor-pointer text-2xl inline-flex  flex-col gap-5 "
    >
      <div className="text-white">Player {num}</div>

      <h3 className="">{player.name}</h3>
      <div className="">{player.point}</div>
    </div>
  );
}

export default Player;
