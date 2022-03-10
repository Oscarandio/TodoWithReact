import React from "react";
import { TodoContext } from "./Context/TodoContext";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { Modal } from "./Modal";
import { TodoForm } from "./components/TodoForm";
import "./App.css";


function AppUI() {
  const { error, loading, searchedTodos, toggleCompleteTodo, deleteTodo, openModal, setOpenModal } =
    React.useContext(TodoContext);
  return (
    <>
    
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p className="info">Loading...</p>}
        {error && <p className="info">There's an error</p>}
        {!loading && !searchedTodos.length && (
          <p className="info">Create your first task!</p>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

     {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>
     )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </>
  );
}
export { AppUI };
