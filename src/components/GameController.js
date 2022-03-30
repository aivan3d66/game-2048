import React, {useEffect, useState} from "react";
import {
  getEmptyBoard,
  generateRandomCellValue,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  isOver,
  checkWin
} from "./GameBoard";

const KEYS ={
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
}

const Cell = ({number}) => {
  return (
    <div className={`cell cell-${number}`}>{number > 0 ? number : ""}</div>
  );
};

const GameController = () => {
  const [board, updateBoard] = useState(generateRandomCellValue(getEmptyBoard()));

  const checkEndGame = () => {
    if (checkWin(board)) {
      alert("You win!");
    } else if (isOver(board)) {
      alert("Game over!");
    }
  };

  const resetState = () => updateBoard(generateRandomCellValue(getEmptyBoard()));

  const left = () => {
    const newBoard = moveLeft(board);
    updateBoard(generateRandomCellValue(newBoard));
    checkEndGame();
  };

  const right = () => {
    const newBoard = moveRight(board);
    updateBoard(generateRandomCellValue(newBoard));
    checkEndGame();
  };

  const up = () => {
    const newBoard = moveUp(board);
    updateBoard(generateRandomCellValue(newBoard));
    checkEndGame();
  };

  const down = () => {
    const newBoard = moveDown(board);
    updateBoard(generateRandomCellValue(newBoard));
    checkEndGame();
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEYS.ARROW_LEFT:
        left();
        break;
      case KEYS.ARROW_RIGHT:
        right();
        break;
      case KEYS.ARROW_UP:
        up();
        break;
      case KEYS.ARROW_DOWN:
        down();
        break;

      default:
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <>
      <div className="game-board">
        {board.map((row, i) => {
          return (
            <div key={`row-${i}`} className="row">
              {row.map((cell, j) => (
                <Cell key={`cell-${i}-${j}`} number={cell}/>
              ))}
            </div>
          );
        })}
      </div>
      <div  className="reset-btn" onClick={resetState}>Reset</div>
    </>
  );
};

export default GameController;
