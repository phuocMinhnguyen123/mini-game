import React, { createContext, useContext, useEffect, useState } from "react";
import { randomFromArr, removeFromArr } from "../function/function";
import { question } from "../data/question";
const AppContext = createContext();

let playerArr = [
  "Nick",
  "Jonas",
  "Duy",
  "Trucy",
  "Nhi",
  "Trang",
  "Cathy",
  "Tri",
  "Thinh",
  "Khoa",
  "Alex",
  "Thy",
  "Danny",
  "Vy",
  "Yen",
];



export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    player1: { name: "", point: 0 },
    player2: { name: "", point: 0 },
    winner: null,
    draw: false,
    finish: false,
    questions:question,
    currentId:0,
  });
  // pick player
  function pickPlayer(playerNo = 1) {
    
    const { player1, player2 } = state;
    const interval = setInterval(() => {
      const player = randomFromArr(playerArr);
      setName(player);
    }, 300);
    setTimeout(() => {
      clearInterval(interval);
      const player = randomFromArr(playerArr);
      playerArr = removeFromArr(playerArr, player);
      return setName(player);
    }, 2000);

    function setName(name) {
      
      if (playerNo === 1) return setPlayer1(name);
      return setPlayer2(name);
    }
  }
  // setPlayer
  function setPlayer1(payload, setPoint = false) {
    if (setPoint)
      return setState((prev) => ({
        ...prev,
        player1: { name: prev.player1.name, point: payload },
      }));
    return setState((prev) => ({
      ...prev,
      player1: { name: payload, point: prev.player1.point },
    }));
  }

  function setPlayer2(payload, setPoint = false) {
    if (setPoint)
      return setState((prev) => ({
        ...prev,
        player2: { name: prev.player2.name, point: payload },
      }));
    return setState((prev) => ({
      ...prev,
      player2: { name: payload, point: prev.player2.point },
    }));
  }

  const setSelectedQuesion = (id) => {

    setState(prev => ({
      ...prev,
      currentId:id,
    }))
  }
  console.log("state",state);
  //  reset
  const reset = () => {
    console.log("current ID" ,state.currentId);
    const newQuestions = state.questions.filter(ele => ele.id !== state.currentId)
    console.log("reset new Questions",newQuestions);
    setState({
      player1: { name: "", point: 0 },
      player2: { name: "", point: 0 },
      winner: null,
      draw: false,
      finish: false,
      currentId:state.currentId,
      questions:[...newQuestions]
    });
  };

  useEffect(() => {
    const { player1, player2, finish } = state;
    if (finish) return;
    if (player1.point !== 0 && player2.point !== 0) {
      if (player1.point === player2.point)
        return setState((prev) => ({ ...prev, draw: true, finish: true }));
      const winner =
        player1.point > player2.point ? player1.name : player2.name;
      return setState((prev) => ({
        ...prev,
        winner: winner,
        finish: true,
      }));
    }
  }, [state]);

  return (
    <AppContext.Provider
      value={{ ...state, setPlayer1, setPlayer2, reset, pickPlayer,setSelectedQuesion }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
