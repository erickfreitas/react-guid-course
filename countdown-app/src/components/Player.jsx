import { useState } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSetName = (event) => {
    setSubmitted(false);
    setPlayerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id='player'>
      <h2>Welcome {submitted ? playerName : 'Unknown entity'}</h2>
      <p>
        <input type='text' onChange={handleSetName} />
        <button onClick={handleSubmit} disabled={!playerName}>
          Set Name
        </button>
      </p>
    </section>
  );
}
