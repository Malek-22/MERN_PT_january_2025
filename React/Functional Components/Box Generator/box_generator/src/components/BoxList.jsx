import React from 'react';

function BoxList({ boxes, onRemoveBox }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {boxes.map((box) => (
        <div key={box.id} style={{ position: 'relative' }}>
          <div
            style={{
              width: `${box.size}px`,
              height: `${box.size}px`,
              backgroundColor: box.color,
              display: 'inline-block',
            }}
          ></div>
          <button
            onClick={() => onRemoveBox(box.id)}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              padding: '2px 5px',
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default BoxList;
