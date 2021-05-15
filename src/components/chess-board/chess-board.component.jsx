import React, { useContext, useEffect, useReducer } from "react";

import ChessTile from "../chess-tile/chess-tile.component";

import { ChessGridContext } from "../../contexts/grid/grid.context";
import CHESS_GRID from '../../contexts/grid/chessGrid.data'

import posiblePositionsReducer from '../../reducers/posible-positions/posible-positions.reducer';

import "./chess-board.styles.css";

const ChessBoard = () => {
  const chessGrid = useContext(ChessGridContext);
  const [posiblePositions, dispatch] = useReducer(
    posiblePositionsReducer,
    CHESS_GRID
  );

  useEffect(() => {
    dispatch({ grid: chessGrid });
  }, [chessGrid]);

  console.log(chessGrid)

  return (
    <div className="chess-board">
      <div className="chess-board-container">
        {posiblePositions.map((row, rowId) => {
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
                    posiblePositions={tile.posiblePositions}
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
