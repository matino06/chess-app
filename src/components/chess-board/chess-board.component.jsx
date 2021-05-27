import React, { useContext } from "react";

import ChessTile from "../chess-tile/chess-tile.component";

import { ChessGridContext } from "../../contexts/grid/grid.context";

import "./chess-board.styles.css";

const ChessBoard = () => {
  const chessGrid = useContext(ChessGridContext);

  return (
    <div className="chess-board">
      <div className="chess-board-container">
        {chessGrid.map((row, rowId) => {
          return (
            <div className="row" key={rowId}>
              {row.map((tile, colId) => {
                return (
                  <ChessTile
                    key={colId}
                    isRowEven={rowId % 2 === 0 || rowId === 0 ? true : false}
                    isColEven={colId % 2 === 0 || colId === 0 ? true : false}
                    piece={tile}
                    position={[rowId, colId]}
                    posiblePosition={tile.posiblePosition}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChessBoard;
