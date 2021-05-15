import React, { createContext, useReducer } from "react";

import CHESS_GRID from "./chessGrid.data";

import chessGridReducer from "../../reducers/grid/chess-grid.reducer";

export const ChessGridContext = createContext();
export const DispatchContext = createContext();

export function ChessGridProvider(props) {
  const [chessGrid, dispatch] = useReducer(chessGridReducer, CHESS_GRID);
 
  return (
    <ChessGridContext.Provider value={chessGrid}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ChessGridContext.Provider>
  );
}
