/* eslint-disable react/prop-types */

import { useState } from "react";

export const TicTacToe = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h1>Tic Tac Toe </h1>
      <Board />
    </div>
  );
};

export const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export const Square = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue("X");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};
