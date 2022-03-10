import React from 'react';
import { TodoContext } from '../Context/TodoContext';
import '../css/TodoCounter.css';

function TodoCounter() {
  const { totalTodos='0', completedTodos='0' } = React.useContext(TodoContext);
  
  return (
    <>
    <h1>Your Tasks</h1>
    <h2>Completed {completedTodos} to {totalTodos}</h2>
    </>
  );
}

export { TodoCounter };