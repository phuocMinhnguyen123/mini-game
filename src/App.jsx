import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dice from "./components/dice";
import Player from "./components/player";
import { useAppContext } from "./context/context";
import { GrPowerReset } from "react-icons/gr";
import Question from "./components/question";
import { shuffleArray } from "./function/function";
import Knowlegde from "./components/Knowlegde";
function App() {
  const { player1,questions, player2, winner, reset, pickPlayer, finish, draw } =
    useAppContext();
  const [showResult,setShowResult] = useState(false);
  useEffect(()=>{
    if (!finish) {
      setShowResult(false);
    }
  },[finish])
  return (
    <div className="w-full flex py-5 flex-col gap-3  min-h-[100vh] bg-[#3165F5]">
      {/* <h1 className="text-center text-3xl font-semibold w-full text-white">
        We share together
      </h1> */}
      <div className="players flex gap-20 text-white justify-center mt-10 w-full">
        <Player handlePick={() => pickPlayer(1)} player={player1} num={1} />
        <div className="text-3xl flex gap-5 flex-col">
          <span className="text-purple-300  text-4xl">Vs</span>
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
        {!showResult && player1 && player2 && <Dice
          canClick={player1.name !== "" && player2.name !== ""}
          className="mx-auto"
        /> }
      </div>
      {draw && !showResult && (
        <div className="winner w-full mt-5 text-center mx-auto text-yellow-400 text-3xl">
          Draw !
          <Question num={4} />
          <button onClick={() => setShowResult(!showResult)} className="mx-auto mt-10 px-5 py-4 text-black text-3xl">Infomation</button>
        </div>
      )}
      {winner && !showResult && (
        <div className="winner w-full mt-5 text-center mx-auto text-yellow-400 text-3xl">
          {winner} pick a question !
          <Question num={4} />
          <button onClick={() => setShowResult(!showResult)} className="mx-auto mt-10 px-5 py-4 text-black text-3xl">Infomation</button>
        </div>
      )}
      
      {showResult && <Knowlegde/>}
    </div>
  );
}

export default App;
