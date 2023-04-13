import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dice from "./components/dice";
import Player from "./components/player";
import { useAppContext } from "./context/context";
import { GrPowerReset } from "react-icons/gr";
function App() {
  const { player1, player2, winner, reset } = useAppContext();
  return (
    <div className="w-full flex flex-col gap-10  h-[100vh] bg-green-700">
      <h1 className="text-center w-full text-white">Slice and dice !</h1>
      <div className="players flex gap-10 text-white justify-center mt-10 w-full">
        <Player player={player1} num={1} />
        <div className="text-3xl flex gap-5 flex-col">
          <span>Vs</span>
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
        <Player player={player2} num={2} />
      </div>
      <div className="w-full flex justify-center ">
        <Dice className="mx-auto" />
      </div>
      {winner && (
        <div className="winner w-full text-center mx-auto text-yellow-400 text-3xl">
          {winner} win !
        </div>
      )}
    </div>
  );
}

export default App;
