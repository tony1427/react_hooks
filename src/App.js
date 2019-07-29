import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import { Typography } from '@material-ui/core';
import TodoList from './TodoList';

function App() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `Clicked ${count}`;
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Do the click here!</button>
      <div className="fruitStyle">
        <p>The current fruit is {fruit}</p>
        <input
          type="radio"
          name="fruit"
          value="banana"
          onClick={() => setFruit('Banana')}
        />
        Banana
        <br />
        <input
          type="radio"
          name="fruit"
          value="orange"
          onClick={() => setFruit('Orange')}
        />
        Orange
        <br />
        <input
          type="radio"
          name="fruit"
          value="kiwi"
          onClick={() => setFruit('Kiwi')}
        />
        Kiwi
        <br />
      </div>
      <div>
        <Typography component="h3" variant="h4">
          Todos
        </Typography>
        <TodoForm
          saveTodo={todoText => {
            const trimmedStr = todoText.trim();

            if (trimmedStr.length > 0) {
              setTodos([...todos, trimmedStr]);
            }
          }}
        />
        <TodoList
          todos={todos}
          deleteTodo={todoIdx => {
            const newTodoList = todos.filter((_, index) => index !== todoIdx);
            setTodos(newTodoList);
          }}
        />
      </div>
    </div>
  );
}

export default App;
