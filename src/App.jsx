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
  const { player1, player2, winner, reset, pickPlayer, finish, draw } =
    useAppContext();

  return (
    <div className="w-full flex py-5 flex-col gap-3  min-h-[100vh] bg-green-700">
      <h1 className="text-center text-3xl w-full text-orange-600">
        Ask Me Anything !
      </h1>
      <div className="players flex gap-20 text-white justify-center mt-10 w-full">
        <Player handlePick={() => pickPlayer(1)} player={player1} num={1} />
        <div className="text-3xl flex gap-5 flex-col">
          <span className="text-purple-600  text-4xl">Vs</span>
          <span onClick={reset} className=" ">
            <GrPowerReset
              color="FFF600"
              onClick={() => reset()}
              fontWeight={700}
              fontSize={30}
              fontFamily=""
              className="w-20 h-20 cursor-pointer font-bold "
            />
          </span>
        </div>
        <Player handlePick={() => pickPlayer(2)} player={player2} num={2} />
      </div>
      <div className="w-full flex justify-center ">
        <Dice
          canClick={player1.name !== "" && player2.name !== ""}
          className="mx-auto"
        />
      </div>
      {draw && (
        <div className="winner w-full mt-5 text-center mx-auto text-yellow-400 text-3xl">
          Draw !
          <Question num={4} />
        </div>
      )}
      {winner && (
        <div className="winner w-full mt-5 text-center mx-auto text-yellow-400 text-3xl">
          {winner} win !
          <Question num={4} />
        </div>
      )}
    </div>
  );
}

export default App;
