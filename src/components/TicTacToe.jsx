/* eslint-disable react/prop-types */
import { useState } from "react";

export const TicTacToe = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Board />
    </div>
  );
};

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice()
    nextSquares[i] = 'X'
    setSquares(nextSquares)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
};

export const Square = ({value, onSquareClick}) => {

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
