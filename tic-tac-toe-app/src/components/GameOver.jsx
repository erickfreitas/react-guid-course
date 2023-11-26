export default function GameOver({ winner, onClickRematch }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onClickRematch}>Rematch!</button>
      </p>
    </div>
  );
}
