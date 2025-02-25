import React, { useState } from 'react';

function BoxForm({ onAddBox }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim()) {
      onAddBox(color, parseInt(size));
      setColor('');
      setSize(60);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <label>Color: </label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Size (pixels): </label>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          min="50"
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default BoxForm;
