import React, { useState } from 'react';

function TestUseState() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [label, setLabel] = useState('');

  const handleClick = () => {
    setLabel(`My name is ${username}, ${age}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Test useState</h2>

      <div>
        Username:
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        Age:
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>

      <button onClick={handleClick}>Change</button>

      <p>{label}</p>
    </div>
  );
}

export default TestUseState;
