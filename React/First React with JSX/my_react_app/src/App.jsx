import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Climb Mt. Everest',
    'Run a marathon',
    'Feed the dogs'
  ]);

  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Todo List:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;