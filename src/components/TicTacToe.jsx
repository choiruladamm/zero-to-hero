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

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
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

export const Square = ({value}) => {

  return (
    <button className="square">
      {value}
    </button>
  );
};
