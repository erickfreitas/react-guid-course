import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
      <span className='player'>
        {!isEditing && <span className='player-name'>{name}</span>}
        {isEditing && <input type='text' required value={name} />}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
