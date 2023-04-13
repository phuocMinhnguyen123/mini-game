import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const appState = {
  player1: { name: "", point: 0 },
  player2: { name: "", point: 0 },
  winner: null,
  draw: false,
  finish: false,
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(appState);
  const setPlayer1 = (payload, setPoint = false) => {
    if (setPoint)
      return setState((prev) => ({
        ...prev,
        player1: { name: prev.player1.name, point: payload },
      }));
    return setState((prev) => ({
      ...prev,
      player1: { name: payload, point: prev.player1.point },
    }));
  };

  const setPlayer2 = (payload, setPoint = false) => {
    if (setPoint)
      return setState((prev) => ({
        ...prev,
        player2: { name: prev.player2.name, point: payload },
      }));
    return setState((prev) => ({
      ...prev,
      player2: { name: payload, point: prev.player2.point },
    }));
  };
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
    <AppContext.Provider value={{ ...state, setPlayer1, setPlayer2, reset }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
