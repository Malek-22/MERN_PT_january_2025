import React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxList from "./components/BoxList";

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, size ) => {
    const newBox = { id: Date.now(), color, size };
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div style={{ textAlign: 'center', padding: '200px' }}>
      <h1>Box Generator Master</h1>
      <BoxForm onAddBox={addBox} />
      <BoxList boxes={boxes} onRemoveBox={removeBox} />
    </div>
  );
}

export default App;