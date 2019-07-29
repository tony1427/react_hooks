import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({ saveTodo }) => {
  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodo(todo);
        setTodo('');
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Todo"
        margin="normal"
        onChange={e => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
    </form>
  );
};
export default TodoForm;
