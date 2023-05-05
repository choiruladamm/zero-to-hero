export const TicTacToe = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h1>Tic Tac Toe </h1>
      <Square />
    </div>
  );
};

export const Square = () => {
  return (
    <button className="square">
      X
    </button>
  );
};
