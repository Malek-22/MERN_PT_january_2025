const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleTodo(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.content}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;
  