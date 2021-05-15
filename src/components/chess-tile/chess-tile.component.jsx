import React from "react";

import CheassPiece from "../chess-piece/chess-piece.component";

import "./chess-tile.styles.css";

const ChessTile = ({ isRowEven, isColEven, piece, position, posiblePosition, posiblePositions }) => {
  return (
    <div
      className={`${posiblePosition ? "yellow" : ""} ${
        isRowEven !== isColEven ? "black" : ""
      } chess-tile`}
    >
      <CheassPiece piece={piece} position={position} posiblePositions={posiblePositions} />
    </div>
  );
};

export default ChessTile;
