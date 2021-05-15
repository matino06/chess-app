import React, { useContext } from "react";

import {
  FaChessPawn,
  FaChessRook,
  FaChessKnight,
  FaChessBishop,
  FaChessQueen,
  FaChessKing,
} from "react-icons/fa";

import { ChessGridContext, DispatchContext } from "../../contexts/grid/grid.context";

import "./chess-piece.styles.css";

const ChessTile = ({ piece, position, posiblePositions }) => {
  const chessGrid = useContext(ChessGridContext);
  const dispatch = useContext(DispatchContext);

  return (() => {
    switch (piece.simbol) {
      case "p":
      case "P":
        return (
          <div>
            <FaChessPawn className="shadow" />
            <FaChessPawn
              className={
                piece.simbol !== piece.simbol.toUpperCase()
                  ? "white-piece"
                  : "black-piece"
              }
            />
          </div>
        );

      case "r":
      case "R":
        return (
          <div>
            <FaChessRook className="shadow" />
            <FaChessRook
              className={
                piece.simbol !== piece.simbol.toUpperCase()
                  ? "white-piece"
                  : "black-piece"
              }
            />
          </div>
        );

      case "n":
      case "N":
        return (
          <div
            onClick={() =>
              dispatch({
                type: "n",
                position: position,
                id: piece.id,
                posiblePositions: posiblePositions,
                grid: chessGrid
              })
            }
          >
            <FaChessKnight className="shadow" />
            <FaChessKnight
              className={
                piece.simbol !== piece.simbol.toUpperCase()
                  ? "white-piece"
                  : "black-piece"
              }
            />
          </div>
        );

      case "b":
      case "B":
        return (
          <div>
            <FaChessBishop className="shadow" />
            <FaChessBishop
              className={
                piece.simbol !== piece.simbol.toUpperCase()
                  ? "white-piece"
                  : "black-piece"
              }
            />
          </div>
        );

      case "q":
      case "Q":
        return (
          <div>
            <FaChessQueen className="shadow" />
            <FaChessQueen
              className={
                piece.simbol !== piece.simbol.toUpperCase()
                  ? "white-piece"
                  : "black-piece"
              }
            />
          </div>
        );

      case "k":
      case "K":
        return (
          <div>
            <FaChessKing className="shadow" />
            <FaChessKing
              className={
                piece.simbol !== piece.simbol.toUpperCase()
                  ? "white-piece"
                  : "black-piece"
              }
            />
          </div>
        );
      default:
        return "";
    }
  })();
};

export default ChessTile;
