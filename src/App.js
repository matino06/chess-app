import React from "react";

import ChessBoard from "./components/chess-board/chess-board.component";

import { ChessGridProvider } from "./contexts/grid/grid.context";

import "./App.css";

const App = () => {
  return (
    <ChessGridProvider>
      <ChessBoard />
    </ChessGridProvider>
  );
};

export default App;
