import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditButton() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className='player'>
        {!isEditing && <span className='player-name'>{playerName}</span>}
        {isEditing && (
          <input
            type='text'
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
