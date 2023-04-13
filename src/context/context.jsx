import React, { createContext, useContext, useEffect, useState } from "react";
import { randomFromArr, removeFromArr } from "../function/function";

const AppContext = createContext();

let playerArr = ["Nick", "Jonas", "Zac", "Larz", "Trang"];

const appState = {
  player1: { name: "", point: 0 },
  player2: { name: "", point: 0 },
  winner: null,
  draw: false,
  finish: false,
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(appState);
  // pick player
  function pickPlayer(playerNo = 1) {
    console.log("pick");
    const { player1, player2 } = state;
    const interval = setInterval(() => {
      const player = randomFromArr(playerArr);
      setName(player);
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
      const player = randomFromArr(playerArr);
      playerArr = removeFromArr(playerArr, player);
      return setName(player);
    }, 3000);

    function setName(name) {
      console.log(name);
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

  //  reset
  const reset = () => {
    setState({
      player1: { name: "", point: 0 },
      player2: { name: "", point: 0 },
      winner: null,
      draw: false,
      finish: false,
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
      value={{ ...state, setPlayer1, setPlayer2, reset, pickPlayer }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
