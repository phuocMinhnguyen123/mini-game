import React, { useRef, useState } from "react";
import { useAppContext } from "../context/context";
import { randomFromArr, removeFromArr } from "../function/function";

function Player({ player, num, handlePick }) {
  return (
    <div
      onClick={handlePick}
      className="w-50 mt-3 cursor-pointer text-2xl inline-flex  flex-col gap-5 "
    >
      <div className="text-white text-[22px]">Player {num}</div>

      <h3 className="text-3xl text-blue-800">{player.name}</h3>
      <div className="">
        <strong className="text-[30px] text-red-500">{player.point}</strong> pts
      </div>
    </div>
  );
}

export default Player;
