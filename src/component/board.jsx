import calculateWinner from "../logic/calculateWinner";
import Square from "./square";

// eslint-disable-next-line react/prop-types
export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // eslint-disable-next-line react/prop-types
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);

  let status = "";

  if (winner) {
    status = `winner = ${winner}`;
  } else {
    status = `Next player = ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="flex flex-wrap w-28 h-28 border border-red-500">
        <Square value={squares[0]} squareClickHandle={() => handleClick(0)} />
        <Square value={squares[1]} squareClickHandle={() => handleClick(1)} />
        <Square value={squares[2]} squareClickHandle={() => handleClick(2)} />
        <Square value={squares[3]} squareClickHandle={() => handleClick(3)} />
        <Square value={squares[4]} squareClickHandle={() => handleClick(4)} />
        <Square value={squares[5]} squareClickHandle={() => handleClick(5)} />
        <Square value={squares[6]} squareClickHandle={() => handleClick(6)} />
        <Square value={squares[7]} squareClickHandle={() => handleClick(7)} />
        <Square value={squares[8]} squareClickHandle={() => handleClick(8)} />
      </div>
    </>
  );
}
