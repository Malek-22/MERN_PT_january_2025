import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), content: action.payload, completed: false }];
    case "TOGGLE":
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Enter a todo..."
      />
      <button onClick={addTodo}>Add</button>

      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={(id) => dispatch({ type: "TOGGLE", payload: id })} 
          deleteTodo={(id) => dispatch({ type: "DELETE", payload: id })}
        />
      ))}
    </div>
  );
};

export default TodoList;
