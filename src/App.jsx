import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dice from "./components/dice";
import Player from "./components/player";
import { useAppContext } from "./context/context";
import { GrPowerReset } from "react-icons/gr";
import Question from "./components/question";
function App() {
  const { player1, player2, winner, reset, pickPlayer } = useAppContext();

  return (
    <div className="w-full flex py-10 flex-col gap-5  h-[100vh] bg-green-700">
      <h1 className="text-center text-3xl w-full text-white">
        Slice and dice !
      </h1>
      <div className="players flex gap-20 text-white justify-center mt-10 w-full">
        <Player handlePick={() => pickPlayer(1)} player={player1} num={1} />
        <div className="text-3xl flex gap-5 flex-col">
          <span className="text-orange-600 ">Vs</span>
          <span onClick={reset} className=" ">
            <GrPowerReset
              color="FFF600"
              onClick={() => reset()}
              fontWeight={700}
              fontSize={30}
              fontFamily=""
              className="w-20 h-20 cursor-pointer font-bold text-orange-600"
            />
          </span>
        </div>
        <Player handlePick={() => pickPlayer(2)} player={player2} num={2} />
      </div>
      <div className="w-full flex justify-center ">
        <Dice className="mx-auto" />
      </div>
      {winner && (
        <div className="winner w-full text-center mx-auto text-yellow-400 text-3xl">
          {winner} win !
        </div>
      )}
      <Question />
    </div>
  );
}

export default App;
