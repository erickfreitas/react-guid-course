import { useState, useRef } from 'react';

export default function Player() {
  const player = useRef();

  const [playerName, setPlayerName] = useState();

  const handleSubmit = (event) => {
    setPlayerName(player.current.value);
  };

  return (
    <section id='player'>
      <h2>Welcome {playerName ?? 'Unknown entity'}</h2>
      <p>
        <input type='text' ref={player} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
