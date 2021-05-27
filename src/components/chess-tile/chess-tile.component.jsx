import React from "react";

import CheassPiece from "../chess-piece/chess-piece.component";

import "./chess-tile.styles.css";

const ChessTile = ({
  isRowEven,
  isColEven,
  piece,
  position,
  posiblePosition,
}) => {
  return (
    <div
      className={`${posiblePosition ? "yellow" : ""} ${
        isRowEven !== isColEven ? "black" : ""
      } chess-tile`}
    >
      <CheassPiece piece={piece} position={position} />
    </div>
  );
};

export default ChessTile;
